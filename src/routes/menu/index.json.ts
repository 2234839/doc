import { resolve, sep } from "path";
import { doc_path } from "../../lib/env";
import { 去除思源笔记id的路径 } from "../../lib/md解析/lute.util";
import { 获取文档资源 } from "../../lib/资源检索/最近更新";
export async function get(req: any, res: any) {
  const docs = await 获取文档资源();
  const menuPath = resolve(doc_path + req.query.path);
  console.log("[menuPath]", menuPath);
  const result = [
    ...[...docs.menu, ...docs.md_file]
      .filter((el) => el.fullSrc.startsWith(menuPath))
      .filter((el) => {
        const restPath = el.fullSrc.slice(menuPath.length + 1);
        // console.log("[el.fullSrc]", el.fullSrc);
        if (restPath) {
          /** 只比 menuPath 多一个层级的 */
          return !restPath.includes(sep);
        } else {
          return false;
        }
      })
      .map((el) => {
        if (el.isDirectory) {
          return {
            path: "./" + el.basename + "/",
            title: "./" + el.basename + "/",
          };
        } else {
          const p = 去除思源笔记id的路径(el.basename);
          return {
            path: "./" + p.replace(/\.md$/, ".html"),
            title: p,
          };
        }
      }),
  ];
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(result));
}
