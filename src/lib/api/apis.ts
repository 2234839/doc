import { 去除思源笔记id的路径 } from "../md解析/lute";
import { ToWebSitePath, 获取文档资源 } from "../资源检索/最近更新";

export async function 获取最近更新() {
  return (await 获取文档资源()).md_file.slice(0, 20).map((el) => {
    return {
      webPath: ToWebSitePath(el),
      name: el.isDirectory ? el.basename : 去除思源笔记id的路径(el.basename),
    };
  });
}
export async function test(a: 1, b: number) {
  return [1, 2];
}