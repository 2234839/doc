import { promises as fsPromise } from "fs";
import { root_path } from "../../lib/env";
import { md_parser_article } from "../../lib/md-parser";

/** post 接口做预览之用 */
export async function post(req: any, res: any) {
  // console.log("请求到达", req.query.path);
  const path = req.query.path as string;
  const filePath = root_path + path.replace(/\?.*$/, "");

  fsPromise
    .readFile(filePath)
    .then(async (r) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      fsPromise
        .writeFile(filePath, req.body.md)
        .then((r) => {
          res.end(JSON.stringify({ code: 1, msg: "更新成功", r }));
        })
        .catch((e) => {
          res.end(JSON.stringify({ code: -1, msg: "更新失败", e }));
        });
    })
    .catch((e) => {
      console.log("打开文件失败", filePath);
      res.writeHead(404, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ code: -1, msg: "打开文件失败" }));
    });
}
