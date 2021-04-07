//@ts-ignore
import * as sapper from "@sapper/server";
import compression from "compression";
import type { NextFunction } from "express-serve-static-core";
import fs from "fs";
import path, { resolve } from "path";
import polka from "polka";
import serveStatic from "serve-static";
import sirv from "sirv";
import { client_path, doc_html_path, doc_path, root_path } from "./lib/env";
import { newLog } from "./lib/log/ali_log";
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
function sendFile(filePath: string, res: any) {
  // 这里到时候再完善
  if (filePath.endsWith(".js")) {
    res.setHeader("content-type", "application/javascript; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400");
  }
  fs.createReadStream(filePath).pipe(res);
}
polka()
  .use(function file_server(req, res, next) {
    setTimeout(() => {
      newLog()
        .push("ip", req.socket.remoteAddress)
        .push("href", decodeURIComponent(req.url))
        .push("label", "req")
        .logger();
    }, 0);
    const file_path = path.resolve(root_path, "./" + req.url);
    if (req.method === "GET") {
      fs.stat(file_path, function (err, stat) {
        if (err) {
          if (/\/client\//.test(req.url)) {
            const fileName = req.url.replace(/.*\/client\//, "");
            const client_file_path = path.resolve(client_path, "./" + fileName);
            sendFile(client_file_path, res);
          } else {
            next(); // move on
          }
          return;
        }
        if (stat.isFile()) {
          sendFile(file_path, res);
        }
        if (stat.isDirectory()) {
          next();
        }
      });
    } else {
      next(); // move on
    }
  })
  .use(
    (() => {
      const s = serveStatic(root_path);
      return (req: any, res: any, next: NextFunction) => {
        return s(req, res, next);
      };
    })(),
  )
  .use(
    (() => {
      const s = serveStatic(doc_path);
      return (req: any, res: any, next: NextFunction) => {
        return s(req, res, next);
      };
    })(),
  )
  .use(
    "/assets",
    (() => {
      const s = serveStatic(resolve(doc_html_path, "./assets"));
      return (req: any, res: any, next: NextFunction) => {
        return s(req, res, next);
      };
    })(),
  )
  .use(
    compression({ threshold: 0 }) as any,
    sirv("static", { dev }),
    sapper.middleware(),
  )
  .listen(PORT, async () => {
    console.log("[PORT]", PORT);
  });
