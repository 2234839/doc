import type { defaultHandle } from 'src/hooks';
import { siteBaseUrl } from '../../data/app.config';
import { 获取文档资源 } from '../../lib/资源检索/最近更新';

/** post 接口做预览之用 */
export const get: defaultHandle = async function get() {
	const xml = `<?xml version="1.0" encoding="utf8" ?>
    <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
    <channel>
    <title>崮生的笔记</title>
    <link>https://shenzilong.cn</link>
    <description>崮生的笔记</description>
      ${(
				await Promise.all(
					(await 获取文档资源()).md_file.slice(0, 20).map(async (el) => {
						return `
<item>
  <title>${el.basename}</title>
  <link>${siteBaseUrl}${el.webPath}</link>
  ${
		''
		// TODO : 现在没有 id 了，这里的发布日期应该换个方式处理
		// el?.fileID?
		// `<published>${new Date(Number(el.fileID.split("-")[0])).toISOString()}</published>`:''
	}

  <updated>${new Date(el.mtimeMs).toISOString()}</updated>
  <description> 崮生 </description>
  <content:encoded xml:base="${siteBaseUrl}${el.webPath}">
    <![CDATA[
      ${(await el.getViewInfo()).html}
    ]]>
  </content:encoded>
</item>
            `;
					})
				)
			).join('')}

        </channel>
    </rss>`;
	return {
		status: 200,
		headers: { 'Content-Type': 'application/xml' },
		body: xml
	};
};
