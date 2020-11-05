import { siteBaseUrl } from "../data/app.config";
import { doc_path } from "./env";
import { 获取文档资源 } from "./资源检索/最近更新";

export const siteMap = generateSiteMap();

export async function generateSiteMap() {
  const r = (await 获取文档资源()).md_file.map((el) => ({ ...el, 相对路径: el.virtual_path.replace(doc_path, "") }));
  const menu = (await 获取文档资源()).allFile
    .filter((el) => el.isDirectory)
    .map((el) => ({ ...el, 相对路径: el.fullSrc.replace(doc_path, "") }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${r
      .map((el) => {
        return `
            <url>
                <loc>${siteBaseUrl}${el.相对路径.slice(/** 去除 .md  */ 0, -3).replace(/[\\\/]/g, "/")}.html</loc>
                <lastmod>${new Date(el.mtimeMs).toISOString()}</lastmod>
            </url>
        `;
      })
      .join("")}
      ${menu
        .map((el) => {
          return `
              <url>
                  <loc>${siteBaseUrl}${el.相对路径.replace(/[\\\/]/g, "/")}/</loc>
                  <lastmod>${new Date(el.mtimeMs).toISOString()}</lastmod>
              </url>
          `;
        })
        .join("")}
</urlset>`;
}
