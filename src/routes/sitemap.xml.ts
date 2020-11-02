import { siteMap } from "../lib/sitemap";

/** post 接口做预览之用 */
export async function get(req: any, res: any) {
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  res.end(await siteMap);
}
