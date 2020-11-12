export class Fun_Cache {
  cache = new Map<any, { t: number; r: any }>();
  constructor(private 缓存过期时间: number) {}
  run<T extends () => any>(f: T): ReturnType<T> {
    const r = this.cache.get(f);
    if (this.cache.has(f) && r) {
      if (Date.now() - r.t > this.缓存过期时间) {
        r.t = Date.now();
        setTimeout(async () => {
          console.log("更新 rss 数据");

          await r.r;
          this.cache.set(f, { t: Date.now(), r });
        }, 0);
      }
      return r.r;
    } else {
      const r = f();
      this.cache.set(f, { t: Date.now(), r });
      return r;
    }
  }
}
