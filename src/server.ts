//@ts-ignore
import * as sapper from "@sapper/server";
import { resolve } from "path";
import polka from "polka";
import serveStatic from "sirv";
import {
  client_path,
  doc_html_path,
  doc_path,
  isDEV,
  root_path,
} from "./lib/env";
import { newLog } from "./lib/log/ali_log";
import { ReqZoneMiddleware } from "./util/reqZone";
const { PORT } = process.env;
const dev = isDEV;

polka()
  .use(function file_server(req, res, next) {
    next();
    setTimeout(() => {
      newLog()
        // .push("ip", req.socket.remoteAddress)
        .push("href", decodeURIComponent(req.url))
        .push("label", "req")
        .logger();
    }, 0);
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
      dev,
    }),
  )
  .use(serveStatic(root_path), serveStatic(doc_path))
  .use("/assets", serveStatic(resolve(doc_html_path, "./assets")))
  .use(serveStatic("static", { dev }), ReqZoneMiddleware, sapper.middleware())
  .listen(PORT);
