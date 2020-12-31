import { resolve } from "path";
import { Res } from "../../lib/api/res";
import { doc_path } from "../../lib/env";
import { 获取文档资源 } from "../../lib/资源检索/最近更新";
export async function get(req: any, res: any) {
  const path = req.query.path as string;
  const filePath = resolve(doc_path + path.replace(/\?.*$/, ""));
  // const outFilePath = resolve(doc_html_path + path.replace(/\?.*$/, ""));

  const docs = await 获取文档资源();

  /** 找对应的文档资源 */
  const doc = docs.md_file.find((el) => el.virtual_path === filePath);

  if (doc) {
    const result = JSON.stringify(await doc.getViewInfo());
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(result);
  } else {
    // console.log('[outFilePath]',outFilePath)
    Res.failure(res, "没有找到对应的文件");
  }
}

/** post 接口做预览之用 */
// export async function post(req: any, res: any) {
//   // console.log("请求到达", req.query.path);
//   const path = req.query.path as string;
//   const filePath = doc_path + path.replace(/\?.*$/, "");
//   if (!req.body.isPreview) {
//     return get(req, res);
//   }
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end(JSON.stringify(await md_parser_article(req.body.md)));
// }
