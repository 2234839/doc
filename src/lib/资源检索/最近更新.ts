import * as fs from "fs/promises";
import * as Path from "path";
import { doc_path } from "../env";

let oldTime = Date.now();

export async function 获取项目下所有文件(src: string) {
  // 读取目录中的所有文件/目录
  const paths = await fs.readdir(src);
  const files = [] as { fullSrc: string; mtimeMs: number; isDirectory: boolean }[];
  for (const path of paths) {
    //拼合路径
    const fullSrc = Path.resolve(src + "/" + path);
    //判断文件状态
    const st = await fs.stat(fullSrc);
    // 判断是否为文件
    if (st.isFile()) {
      files.push({ fullSrc, mtimeMs: st.mtimeMs, isDirectory: false });
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      files.push({ fullSrc, mtimeMs: st.mtimeMs, isDirectory: true });
      files.push(...(await 获取项目下所有文件(fullSrc)));
    }
  }
  return files;
}

export const 最近更新 = [];

async function main() {
  const allFile = await 获取项目下所有文件(doc_path);
  const md_file = allFile
    .filter((el) => !el.isDirectory && el.fullSrc.endsWith(".md"))
    .sort((a, b) => b.mtimeMs - a.mtimeMs);
  return {
    allFile,
    md_file,
  };
}
export let 文档资源 = main();

/** 会触发更新资源的流程 */
export function 获取文档资源() {
  if (Date.now() - oldTime > 24 * 60 * 60 * 1000) {
    oldTime = Date.now();
    setTimeout(() => {
      文档资源 = main();
    }, 100);
  }
  return 文档资源;
}
