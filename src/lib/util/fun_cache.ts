export class Fun_Cache {
	cache = new Map<unknown, { t: number; r: unknown }>();
	constructor(private 缓存过期时间: number) {}
	async run<T extends () => unknown>(f: T): Promise<ReturnType<T>> {
		const r = this.cache.get(f);
		if (this.cache.has(f) && r) {
			if (Date.now() - r.t > this.缓存过期时间) {
				r.t = Date.now();
				setTimeout(async () => {
					this.cache.set(f, { t: Date.now(), r: await f() });
				});
			}
			return (await r.r) as ReturnType<T>;
		} else {
			const r = f();
			this.cache.set(f, { t: Date.now(), r });
			return (await r) as ReturnType<T>;
		}
	}
}
