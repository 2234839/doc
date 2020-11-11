export class Fun_Cache {
  cache = new WeakMap<any, { t: number; r: any }>();
  constructor(private 缓存过期时间: number) {}
  run<T extends () => any>(f: T): ReturnType<T> {
    const r = this.cache.get(f);
    if (this.cache.has(f) && r) {
      if (Date.now() - r.t > this.缓存过期时间) {
        this.cache.set(f, { t: Date.now(), r });
      }
      return r.r;
    } else {
      const r = f();
      this.cache.set(f, { t: Date.now(), r });
      return r;
    }
  }
}
