export class Fun_Cache {
  cache = new Map<any, { t: number; r: any }>();
  constructor(private 缓存过期时间: number) {}
  async run<T extends () => any>(f: T): Promise<ReturnType<T>> {
    const r = this.cache.get(f);
    if (this.cache.has(f) && r) {
      if (Date.now() - r.t > this.缓存过期时间) {
        r.t = Date.now();
        setTimeout(async () => {
          await r.r;
          this.cache.set(f, { t: Date.now(), r });
        }, 0);
      }
      return await r.r;
    } else {
      const r = f();
      this.cache.set(f, { t: Date.now(), r });
      return await r;
    }
  }
}
