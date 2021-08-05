import type { Locals } from '$lib/types';
import { 获取文档资源 } from '$lib/资源检索/最近更新';
import { BuildDoc } from '$lib/资源检索/资源编译';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<Locals, FormData> = async function get() {
	await BuildDoc();
	await 获取文档资源(true);
	return {
		status: 200,
		body: '更新成功'
	};
};

export const post = get;
