import { promises as fsPromise } from "fs";
import { root_path } from "../../lib/env";
import { IncomingMessage } from "http";
import { md_parser_article } from "../../lib/md-parser";
export function get(req: any, res: any) {
  console.log("请求到达", req.query.path);
  const path = req.query.path as string;
  const filePath = root_path + path.replace(/\?.*$/, "");
  fsPromise
    .readFile(filePath)
    .then(async (r) => {
      console.log(r.length);
      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      res.end(JSON.stringify(await md_parser_article(r.toString())));
    })
    .catch((e) => {
      console.log("打开文件失败", filePath);
      res.writeHead(404, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify([111111111]));
    });
  // return;
  // fsPromise
  //   .readdir(root_path + req.query.path)
  //   .then((r) => {
  //     res.writeHead(200, {
  //       "Content-Type": "application/json",
  //     });
  //     res.end(JSON.stringify(r));
  //   })
  //   .catch(() => {
  //     res.writeHead(500, {
  //       "Content-Type": "application/json",
  //     });
  //     res.end("未知错误");
  //   });
}
