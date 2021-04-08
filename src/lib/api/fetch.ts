import type * as apis from "./apis";
export namespace AJAX {
  export function post(options: { url: string; data: unknown }) {
    return fetch(options.url, {
      method: "POST",
      body: JSON.stringify(options.data),
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
type apis = typeof apis;
type method = keyof apis;

/** ═════════🏳‍🌈 超轻量级的远程调用，完备的类型提示！ 🏳‍🌈═════════  */

/** Remote call ， 会就近的选择是远程调用还是使用本地函数 */
export function RC<K extends method>(
  method: K,
  data: Parameters<apis[K]>,
): Promise<unPromise<ReturnType<apis[K]>>> {
  if (typeof process === "undefined" || process?.env?.PORT === "undefined") {
    return AJAX.post({ url: "/blog/api", data: { method, data } }).then((r) =>
      r.json(),
    );
  } else {
    return import("./apis").then((r) => 直接调用(r, method, data));
  }
}
/** 包装了一次的 RC 方便调整到函数定义  */
export const API = new Proxy(
  {},
  {
    get(target, p: method) {
      return (...arg: any) => RC(p, arg);
    },
  },
) as apisPromise;

/** apis 中包含的方法可能不是返回 promise 的，但 RC 调用后的一定是返回 promsie */
type apisPromise = {
  readonly [K in keyof apis]: {
    (...arg: Parameters<apis[K]>): Promise<unPromise<ReturnType<apis[K]>>>;
    Parameters: Parameters<apis[K]>;
    res: unPromise<ReturnType<apis[K]>>;
  };
};
export function 直接调用(ctx: any, method: string, arg: any[]) {
  console.log("[remote call]", method, arg);

  if (!Object.hasOwnProperty.call(ctx, method)) {
    console.error("没有找到对应的方法");
    throw "没有找到对应的方法";
  } else {
    return ctx[method](...arg);
  }
}
