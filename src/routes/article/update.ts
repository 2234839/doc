import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

/** post 接口做预览之用 */
export const post: RequestHandler<Locals, FormData>  =  async function post() {
	// console.log("请求到达", req.query.path);
	/** 还没想好权限校验怎么做，所以这里先不走 */
	return {};
}
