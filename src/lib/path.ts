import { API } from './api/fetch';
import type { Load } from '@sveltejs/kit';
// 利用 error 页面的兜底功能来完成将 doc文档 映射到对应的 url
export const preload: Load = async function ({ page, fetch, session, context }) {
	const path = decodeURIComponent(page.path);
	if (import.meta.env.SSR) {
		API.踩一踩(path, undefined);
	}
	if (path.endsWith('.html')) {
		const res = await API.getArticleByPath(path);
		if (res.code === -1) {
			/**
			 * 对于在 routes 正则匹配范围内的文件（但 routes 没有提供服务）进行请求，
			 * 如果直接进入 server.ts 中则可以正常被静态服务匹配中返回文件
			 * 但如果在浏览器端就会陷入 [...path].svelte  load 的逻辑判断，导致死循环
			 */
			if (import.meta.env.SSR) {
				return {
					status: 404,
					error: new Error('not Found')
				};
			} else {
				// 默认为备份页面 TODO 他也有可能不是，所以这里的逻辑还需要思考一下，怎么更周密
				return {
					status: 302,
					redirect: '/share/backups?path=' + path
				};
			}
		}
		const article = res.result;

		return {
			status: 200,
			props: {
				time: Date.now(),
				page,
				article: article,
				title: article.title
			}
		};
	} else if (path.endsWith('/') || path.split('/').pop().includes('.') === false) {
		// 菜单页
		const menu = await fetch('/menu.json?path=' + path).then((r) => {
			return r.json();
		});
		const title = decodeURIComponent(path)
			/* eslint-disable no-useless-escape */
			.split(/[\/\\]/)
			.filter((el) => el)
			.reverse()
			.join('<');
		return {
			status: 200,
			props: {
				time: Date.now(),
				page,
				menu,
				title
			}
		};
	} else {
		return {
			status: 404,
			error: new Error('not Found')
		};
	}
};
