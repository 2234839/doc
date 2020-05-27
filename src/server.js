import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import path from "path";
import fs from "fs";
const { /** PORT,*/ NODE_ENV } = process.env;
const PORT=9939
const dev = NODE_ENV === "development";
const server_path = __dirname;
const root_path = path.resolve(__dirname, "../../../");
const client_path = path.resolve(server_path, "../client");
console.log({ root_path, __dirname, client_path });
function sendFile(filePath, res) {
  // 这里到时候再完善
  if (filePath.endsWith(".js")) {
    res.setHeader("content-type", "application/javascript; charset=utf-8");
  }
  fs.createReadStream(filePath).pipe(res);
}

polka() // You can also use Express
  .use(function file_server(req, res, next) {
    console.log(req.url);
    const file_path = path.resolve(root_path, "./" + req.url);
    if (req.method === "GET") {
      fs.stat(file_path, (err, r) => {
        if (err) {
          next();
        } else if (r.isFile()) {
          sendFile(file_path, res);
        } else {
          if (/\/client\//.test(req.url)) {
            const fileName = req.url.replace(/.*\/client\//, "");
            const client_file_path = path.resolve(client_path, "./" + fileName);
            sendFile(client_file_path, res);
          } else {
            next(); // move on
          }
        }
      });
    } else {
      next(); // move on
    }
  })
  .use(compression({ threshold: 0 }), sirv("static", { dev }), sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
