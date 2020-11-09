import { siteBaseUrl } from "../../data/app.config";
import { lute, 去除思源笔记id的路径 } from "../../lib/md解析/lute";
import { 获取文档资源 } from "../../lib/资源检索/最近更新";

/** post 接口做预览之用 */
export async function get(req: any, res: any) {
  const xml = `<?xml version="1.0" encoding="utf8" ?>
    <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
    <channel>
    <title>崮生的笔记</title>
    <link>https://shenzilong.cn</link>
    <description>崮生的笔记</description>
      ${(await 获取文档资源()).md_file
        .slice(0, 20)
        .map((el) => {
          return `
<item>
  <title>${el.isDirectory ? el.basename : 去除思源笔记id的路径(el.basename)}</title>
  <link>${siteBaseUrl}${el.webPath}</link>
  <published>${new Date(el.fileID.split("-")[0]).toISOString()}</published>
  <updated>${new Date(el.mtimeMs).toISOString()}</updated>
  <description> 崮生 </description>
  <content:encoded xml:base="${siteBaseUrl}${el.webPath}">
    <![CDATA[
      ${lute.MarkdownStr("", el.mdStr)}
    ]]>
  </content:encoded>
</item>
            `;
        })
        .join("")}

        </channel>
    </rss>`;
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });
  res.end(xml);
}
