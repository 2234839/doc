import { siteBaseUrl } from "../../data/app.config";
import { API } from "../../lib/api/fetch";
import { lute, 去除思源笔记id的路径 } from "../../lib/md解析/lute";
import { 获取文档资源 } from "../../lib/资源检索/最近更新";

/** post 接口做预览之用 */
export async function get(req: any, res: any) {
  const xml = `<?xml version="1.0" encoding="utf8" ?>
    <feed version="2.0">
    <title>崮生的笔记</title>
    <link>https://shenzilong.cn</link>
    <description>崮生的笔记</description>
      ${(await 获取文档资源()).md_file
        .slice(0, 20)
        .map((el) => {
          return `<entry>
                <title>${el.isDirectory ? el.basename : 去除思源笔记id的路径(el.basename)}</title>
                <link>${siteBaseUrl}${el.webPath}</link>
                <content type="html" xml:lang="zh" xml:base="${siteBaseUrl}">

                <![CDATA[${lute.MarkdownStr("", el.mdStr)}
              ]]></content>
            </entry>
            `;
        })
        .join("")}
    </feed>`;
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });
  res.end(xml);
}
