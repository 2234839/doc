import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import * as apis from '$lib/api/apis';
import { 直接调用 } from '$lib/api/fetch';

export const post: RequestHandler<Locals, FormData> = async function post(req) {
	//@ts-ignore TODO: 这里类型有待改进
	const { method, data: _data } = req.body;

	const result = await 直接调用(apis, method, _data);
	return {
		body: {
			// 因为 result 可能是原始值,比如数字。
			// 这时候直接作为 body 会导致 server 的 res.end() 报错
			value: result === undefined ? { message: '该远程函数无返回值' } : result
		}
	};
};
