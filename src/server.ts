//@ts-ignore
import * as sapper from "@sapper/server";
import compression from "compression";
import { resolve } from "path";
import polka from "polka";
import serveStatic from "sirv";
import { client_path, doc_html_path, doc_path, root_path } from "./lib/env";
import { newLog } from "./lib/log/ali_log";
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
polka()
  .use(function file_server(req, res, next) {
    next();
    setTimeout(() => {
      newLog()
        .push("ip", req.socket.remoteAddress)
        .push("href", decodeURIComponent(req.url))
        .push("label", "req")
        .logger();
    }, 0);
    // console.log("[req.url]", req.url);
  })
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
      dev: true,
      brotli: true,
    }),
  )
  .use(serveStatic(root_path), serveStatic(doc_path))
  .use("/assets", serveStatic(resolve(doc_html_path, "./assets")))
  .use(
    compression({ threshold: 0 }) as any,
    serveStatic("static", { dev }),
    function file_server(req, res, next) {
      next();
      console.log("[req.url 2]", req.url);
    },
    sapper.middleware(),
  )
  .listen(PORT, async () => {
    console.log("[PORT]", PORT);
  });
