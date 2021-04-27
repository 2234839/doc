/** 现在服务端和客户端import 的结果不一致，没有办法只能使用这种方式创建实例 */
export function instantiate<R>(c: { new (): R }): R {
  return typeof c === "function" ? new c() : new (c as any).default();
}
