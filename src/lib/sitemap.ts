import { siteBaseUrl } from '../data/app.config';
import { ToWebPath, 获取文档资源 } from './资源检索/最近更新';

export const siteMap = generateSiteMap();

export async function generateSiteMap() {
	const r = (await 获取文档资源()).md_file;
	const menu = (await 获取文档资源()).menu;

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...r, ...menu]
			.map((el) => {
				const docObj = 'docObj' in el ? el.docObj : el
				return `
            <url>
                <loc>${siteBaseUrl}${ToWebPath(docObj)}</loc>
                <lastmod>${new Date(docObj.mtimeMs).toISOString()}</lastmod>
            </url>
        `;
			})
			.join('')}
</urlset>`;
}
