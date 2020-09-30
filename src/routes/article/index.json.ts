import { promises as fsPromise } from "fs";
import { Res } from "../../lib/api/res";
import { doc_path } from "../../lib/env";
import { md_parser_article } from "../../lib/md-parser";
export function get(req: any, res: any) {
  // console.log("请求到达", req.query.path);
  const path = req.query.path as string;
  const filePath = doc_path + path.replace(/\?.*$/, "");
  fsPromise
    .readFile(filePath)
    .then(async (r) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(await md_parser_article(r.toString())));
    })
    .catch((e) => {
      Res.failure(res, "打开文件失败");
    });
}

/** post 接口做预览之用 */
export async function post(req: any, res: any) {
  // console.log("请求到达", req.query.path);
  const path = req.query.path as string;
  const filePath = doc_path + path.replace(/\?.*$/, "");
  if (!req.body.isPreview) {
    return get(req, res);
  }
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(await md_parser_article(req.body.md)));
}
