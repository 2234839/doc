//@ts-ignore
import * as sapper from "@sapper/server";
import compression from "compression";
import { resolve } from "path";
import polka from "polka";
import serveStatic from "sirv";
import { client_path, doc_html_path, doc_path, root_path } from "./lib/env";
import { newLog } from "./lib/log/ali_log";
import "zone.js";
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
let log = console.log;

interface reqZone {
  ip: string;
  start: Date;
  id: number;
  msg: [number, unknown[]][];
  url: string;
}
function curZoneGet<K extends keyof reqZone>(k: K, zone?: Zone): reqZone[K] {
  return (zone ?? Zone.current).get(k);
}
let requestId = 0;

console.log = (...args: unknown[]) => {
  if (Zone.current.name === "reqZone") {
    curZoneGet("msg").push([Date.now(), args]);
  } else {
    log(...args);
  }
};
polka()
  .use(
    async function file_server(req, res, next) {
      const id = requestId++;
      const ip =
        req.headers["X-Real-IP"] ??
        req.headers["X-Forwarded-For"] ??
        req.socket.remoteAddress;
      let reqZone = Zone.root.fork({
        name: "reqZone",
        properties: {
          ip,
          start: new Date(),
          id,
          msg: [],
          url: req.url,
        } as reqZone,
      });
      reqZone.run(next);
      res.on("close", function () {
        const ip = curZoneGet("ip", reqZone);
        const start = curZoneGet("start", reqZone);
        const id = curZoneGet("id", reqZone);
        const startS = start.getTime();

        log(
          `start: ${id} , ${ip} , ${start.toLocaleString()} : ${curZoneGet(
            "url",
            reqZone,
          )}`,
        );
        curZoneGet("msg", reqZone).forEach(([t, args]) => {
          log("  ", t - startS + "ms\t", ...args);
        });
        log(
          `end  : ${new Date().toLocaleString()} 总耗时${
            Date.now() - startS
          }ms\n--------`,
        );
      });
      // reqZone.run(next);
    },
    function file_server(req, res, next) {
      next();
      setTimeout(() => {
        newLog()
          .push("ip", req.socket.remoteAddress)
          .push("href", decodeURIComponent(req.url))
          .push("label", "req")
          .logger();
      }, 0);
    },
  )
  .use(
    /.*?\/?client\//,
    // function file_server(req, res, next) {
    //   console.log("[req.url 1]", req.url);
    //   next();
    // },
    serveStatic(resolve(client_path), {
      onNoMatch: (req, res) => {
        console.log("client not match [req.url]", req.url);
      },
      dev,
      brotli: true,
    }),
  )
  .use(serveStatic(root_path), serveStatic(doc_path))
  .use("/assets", serveStatic(resolve(doc_html_path, "./assets")))
  .use(
    compression({ threshold: 0 }) as any,
    serveStatic("static", { dev }),
    sapper.middleware(),
  )
  .listen(PORT, async () => {
    console.log("[PORT]", PORT);
  });
