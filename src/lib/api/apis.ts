import { ToWebPath, 获取文档资源 } from "../资源检索/最近更新";

export async function 获取最近更新() {
  return (await 获取文档资源()).md_file.slice(0, 20).map((el) => {
    return {
      webPath: ToWebPath(el),
      name: el.isDirectory ? el.basename : el.basename,
    };
  });
}
export async function test(a: 1, b: number) {
  return [1, 2];
}

export * from "./state/访问记录";
export { find404Near } from "./其他辅助/404页面导流";
export * from "./数据聚合/rss";
export * from "./blog";
