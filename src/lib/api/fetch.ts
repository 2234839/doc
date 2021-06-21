import type * as apis from './apis';

type apis = typeof apis;
type method = keyof apis;

const AJAX = {
	post(options: { url: string; data: unknown }) {
		return fetch(options.url, {
			method: 'POST',
			body: JSON.stringify(options.data),
			headers: {
				'content-type': 'application/json'
			}
		});
	}
};
/** ═════════🏳‍🌈 超轻量级的远程调用，完备的类型提示！ 🏳‍🌈═════════  */

/** Remote call ， 会就近的选择是远程调用还是使用本地函数 */
async function RC<K extends method>(
	method: K,
	data: Parameters<apis[K]>
): Promise<unPromise<ReturnType<apis[K]>>> {
	if (import.meta.env.SSR) {
		return await import('./apis').then((r) => 直接调用(r, method, data));
	} else {
		return await AJAX.post({ url: '/blog/api', data: { method, data } }).then(
			async (r) => (await r.json()).value
		);
	}
}

let temp = [];
let id: NodeJS.Timeout;
function batchCall() {
	const arr = temp;
	temp = [];
	if (arr.length === 1) {
		const [p, args, resolve] = arr[0];
		RC(p, args).then(resolve);
	} else {
		RC('batchCall', arr).then((r) => {
			r.forEach((res, i) => arr[i][2](res));
		});
	}
}
/** 包装了一次的 RC 方便调整到函数定义  */
const API = new Proxy(
	{},
	{
		get(_, p: method) {
			// 在浏览器端对于短时间（60ms）内的请求进行合并发送，如果不需要此优化的话只留下else分支即可
			if (!import.meta.env.SSR) {
				return (...arg:any[]) => {
					return new Promise((resolve, reject) => {
						temp.push([p, arg, resolve, reject]);
						clearTimeout(id);
						id = setTimeout(batchCall, 60);
					});
				};
			} else {
				return (...arg:any[]) => RC(p, arg);
			}
		}
	}
) as apisPromise;

/** apis 中包含的方法可能不是返回 promise 的，但 RC 调用后的一定是返回 promsie */
type apisPromise = {
	readonly [K in keyof apis]: {
		(...arg: Parameters<apis[K]>): Promise<unPromise<ReturnType<apis[K]>>>;
		Parameters: Parameters<apis[K]>;
		res: unPromise<ReturnType<apis[K]>>;
	};
};
function 直接调用(ctx:any, method: string, arg: unknown[]) {
	console.log('[rc]', method, arg);

	if (!Object.hasOwnProperty.call(ctx, method)) {
		console.error('没有找到对应的方法');
		throw '没有找到对应的方法';
	} else {
		return ctx[method](...arg);
	}
}

export { AJAX, 直接调用, API, RC };
