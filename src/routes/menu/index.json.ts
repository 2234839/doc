import { doc_html_path } from '$lib/env';
import { getName, 获取文档资源 } from '$lib/资源检索/最近更新';
import type { RequestHandler } from '@sveltejs/kit';
import { resolve, sep } from 'path';

export const get: RequestHandler = async function get(req) {
	const docs = await 获取文档资源();
	const webPath = req.query.get('path');
	const menuPath = resolve(doc_html_path, '.' + webPath);
	console.log('[webPath]', webPath);
	const result = [
		...[...docs.menu, ...docs.md_file]
			.filter((el) => el.fullSrc.startsWith(menuPath))
			.filter((el) => {
				const restPath = el.fullSrc.slice(menuPath.length + 1);
				if (restPath) {
					/** 只比 menuPath 多一个层级的 */
					return !restPath.includes(sep);
				} else {
					return false;
				}
			})
			.map((el) => {
				const endSnippet = webPath.replace(/\/$/, '').split('/').pop();
				const prePath = './' + (endSnippet === '' ? '' : endSnippet + '/');
				if (el.isDirectory) {
					return {
						path: prePath + el.basename + '/',
						title: getName(el)
					};
				} else {
					const p = el.basename;
					return {
						path: prePath + p,
						title: getName(el)
					};
				}
			})
	];
	return {
		status: 200,
		body: result
	};
};
