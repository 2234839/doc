import { siteBaseUrl } from "../../data/app.config";
import { API } from "../../lib/api/fetch";

/** post 接口做预览之用 */
export async function get(req: any, res: any) {
  const xml = `<?xml version="1.0" encoding="utf8" ?>
    <rss version="2.0">
    <channel>
      <title>崮生的笔记</title>
      <link>https://shenzilong.cn</link>
      <description>崮生的笔记</description>
      ${(await API.获取最近更新())
        .map((el) => {
          return `
                <item>
                <title>${el.name}</title>
                <link>${siteBaseUrl}${el.webPath}</link>
                <description>${/** TODO 这里应该要替换为真正的描述 */ el.name}</description>
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
