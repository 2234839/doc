import * as fs from "fs/promises";
import { doc_path } from "../env";

export async function 递归(src) {
  // 读取目录中的所有文件/目录
  const paths = await fs.readdir(src);
  const files = [] as { fullSrc: string; mtimeMs: number }[];
  for (const path of paths) {
    //拼合路径
    const fullSrc = src + "/" + path;
    //判断文件状态
    const st = await fs.stat(fullSrc);
    // 判断是否为文件
    if (st.isFile()) {
      files.push({ fullSrc, mtimeMs: st.mtimeMs });
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      files.push(...(await 递归(fullSrc)));
    }
  }
  return files;
}

export const 最近更新 = [];

async function test() {
  const md_file = (await 递归(doc_path))
    .filter((el) => el.fullSrc.endsWith(".md"))
    .sort((a, b) => b.mtimeMs - a.mtimeMs);
  console.log("[md_file]", md_file.slice(0, 10));
}
test();
// {
//   fullSrc: 'D:\\code\\doc\\doc/杂记/咸蛋技巧/坐地铁无依靠站稳的技巧.md',
//   mtimeMs: 1602740842520.9026
// },
// {
//   fullSrc: 'D:\\code\\doc\\doc/杂记/咸蛋技巧/坐地铁无依靠站稳的技巧.md',
//   mtimeMs: 1602753137040.463
// },
