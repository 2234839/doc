import * as fs from "fs/promises";
import * as Path from "path";
import { doc_path } from "../env";

export async function 获取项目下所有文件(src:string) {
  // 读取目录中的所有文件/目录
  const paths = await fs.readdir(src);
  const files = [] as { fullSrc: string; mtimeMs: number }[];
  for (const path of paths) {
    //拼合路径
    const fullSrc = Path.resolve(src + "/" + path);
    //判断文件状态
    const st = await fs.stat(fullSrc);
    // 判断是否为文件
    if (st.isFile()) {
      files.push({ fullSrc, mtimeMs: st.mtimeMs });
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      files.push(...(await 获取项目下所有文件(fullSrc)));
    }
  }
  return files;
}

export const 最近更新 = [];

async function test() {
  const allFile = await 获取项目下所有文件(doc_path);
  const md_file = allFile.filter((el) => el.fullSrc.endsWith(".md")).sort((a, b) => b.mtimeMs - a.mtimeMs);
  // console.log("[md_file]", md_file.slice(0, 10));
}
test();
