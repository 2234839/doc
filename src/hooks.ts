import { doc_html_path, root_path } from '$lib/env';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';
import { promises as fs } from 'fs';
import mime from 'mime';
import * as path from 'path';
import { ReqZoneMiddleware } from './util/reqZone';

type Context = {
	is_new: boolean;
	userid: string;
};
/** 默认的 handle 处理器 */
export type defaultHandle = Handle<Context>;

const rawHandel: Handle = async ({ request, render }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await render(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	}
	return response;
};
/** 静态文件服务 */
const staticServe: defaultHandle = async ({ request, render }) => {
	//=== 静态文件服务
	const webPath = decodeURIComponent(request.path);
	console.log('[webPath]', webPath);
	// const targetPath = path.join(root_path, webPath);
	for (const promise of [
		assetsAdapter('/assets/', doc_html_path, webPath),
		assetsAdapter('', root_path, webPath),
		// assetsAdapter('', doc_path, webPath)
	]) {
		const r = await promise;
		if (r !== undefined) {
			return r;
		}
	}

	function assetsAdapter(prePath: string, assetsPath: string, webPath: string) {
		return new Promise((resolve, reject) => {
			if (webPath.startsWith(prePath)) {
				const targetPath = path.join(assetsPath, './' + webPath.slice(1));
				if (false === targetPath.startsWith(assetsPath)) {
					console.log(`[警报] 路径越权访问. 允许路径:${assetsPath} 请求路径${webPath}`);
					return resolve(undefined);
				} else {
					return fs
						.readFile(targetPath)
						.then(
							(r) => ({
								status: 200,
								headers: {
									'Content-Type': mime.getType(webPath)
								},
								body: r
							}),
							// throw '多半是找不着文件';
							(err) => undefined
						)
						.then(resolve);
				}
			} else {
				// throw '前缀不匹配';
				return resolve(undefined);
			}
		});
	}
};
export const handle: defaultHandle = async function (p) {
	//=== 静态文件服务
	return ReqZoneMiddleware(p, async () => {
		// 这里存放所有 handle
		for (const handle of [staticServe, rawHandel]) {
			const r = await handle(p);
			if (r !== undefined) {
				return r;
			}
		}
	});
};
