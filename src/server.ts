//@ts-ignore
import * as sapper from "@sapper/server";
import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import serveStatic from "serve-static";
import fs from "fs";
import { client_path, doc_path, root_path } from "./lib/env";
import path from "path";
import { 最近更新, 获取项目下所有文件 } from "./lib/资源检索/最近更新";
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
function sendFile(filePath:string, res:any) {
  // 这里到时候再完善
  if (filePath.endsWith(".js")) {
    res.setHeader("content-type", "application/javascript; charset=utf-8");
  }
  fs.createReadStream(filePath).pipe(res);
}

polka()
  .use(function file_server(req, res, next) {
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
  .use(serveStatic(root_path))
  .use(serveStatic(doc_path))
  .use(compression({ threshold: 0 }), sirv("static", { dev }), sapper.middleware())
  .listen(PORT, (err:Error) => {
    if (err) console.log("error", err);
  });

async function main() {
  console.log("[list]", 最近更新);
}
main();
