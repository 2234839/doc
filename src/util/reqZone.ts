import { isBot as IsBot } from '$lib/isbot';
import { AsyncLocalStorage } from 'async_hooks';
import type { defaultHandle } from 'src/hooks';

export const rawLog = console.log;

interface reqZone {
	ip: string;
	start: Date;
	id: number;
	msg: [number, unknown[]][];
	url: string;
	ua: string;
	referrer: string;
	isBot: boolean;
}
const reqZone = new AsyncLocalStorage<reqZone>();

/** 使用的时候要确保在 reqZone 内，可以使用 isReqZone() 来确保 */
export function reqZoneGet<K extends keyof reqZone>(k: K) {
	return reqZone.getStore()[k];
}
/** 判断当前执行代码是否在 reqZone 内 */
export function isReqZone() {
	const id = reqZone.getStore();
	return id !== undefined;
}
let requestId = 0;
console.log = (...args: unknown[]) => {
	if (isReqZone()) {
		// if (args.join('').trim() == '') {
		// 	 console.error('空 log',new Error().stack);
		// 	 throw new Error('空 log')
		// }
		reqZoneGet('msg').push([Date.now(), args]);
	} else {
		rawLog(...args);
	}
};
/** 重写了 log 函数，通过 zone 来将 next 运行期间打印的 log 收集到一起直到请求结束后统一 log */

export const ReqZoneMiddleware = function (arg: Parameters<defaultHandle>[0], next: () => unknown) {
	const { request: req } = arg;

	const id = requestId++;
	const ip = String(
		req.headers['X-Forwarded-For'] ?? req.headers['x-forwarded-for'] ?? req.host
	).split(',')[0];

	const ua = req.headers['user-agent'] ?? '';
	const referrer = (() => {
		const s = req.headers['referer'] ?? '';
		try {
			return decodeURIComponent(s);
		} catch (error) {
			return s;
		}
	})();
	const isBot = IsBot(ua);
	const params = {
		ip,
		start: new Date(),
		id,
		msg: [],
		url: decodeURIComponent(req.path),
		ua,
		isBot,
		referrer
	};

	const r = reqZone.run(params, next) as Promise<unknown>;
	const curZoneStore = params;
	r.finally(() => {
		const { ip, start, ua, isBot, referrer, url } = curZoneStore;
		if (['css', 'js', 'map', 'png'].includes(url.split('.').pop())) {
			return;
		}
		const startS = start.getTime();
		const prefix = '  ';
		rawLog(`${req.locals.userid}:${ip}, ${url}`);
		if (isBot) {
			rawLog(`${prefix} isBot: ${ua}`);
		}
		if (referrer) {
			rawLog(`${prefix} referrer: ${referrer}`);
		}
		curZoneStore['msg'].forEach(([t, args]) => {
			rawLog(prefix, t - startS + 'ms\t', ...args);
		});
		rawLog(
			`end  : ${start.toLocaleString()}-${new Date().toLocaleString()} 总耗时${
				Date.now() - startS
			}ms\n--------`
		);
	});
	return r;
};
