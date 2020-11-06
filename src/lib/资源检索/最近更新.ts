import * as fs from "fs/promises";
import * as Path from "path";
import { doc_path } from "../env";
import { 去除思源笔记id的路径 } from "../md解析/lute";

let oldTime = Date.now();

/** 文档的具体文件信息节点 */
type docFileNode = { fullSrc: string; mtimeMs: number; /** 是目录节点 */ isDirectory: boolean; basename: string };
export async function 获取项目下所有文件(src: string) {
  // 读取目录中的所有文件/目录
  const paths = await fs.readdir(src);
  const files = [] as docFileNode[];
  for (const path of paths) {
    //拼合路径
    const fullSrc = Path.resolve(src + "/" + path);
    //判断文件状态
    const st = await fs.stat(fullSrc);
    // 判断是否为文件
    const isDirectory = st.isDirectory();
    const docObj = { fullSrc, mtimeMs: st.mtimeMs, isDirectory, basename: Path.basename(fullSrc) };
    files.push(docObj);

    // 如果是目录则递归调用自身
    if (isDirectory && ![".git", "node_modules", "assets"].includes(docObj.basename)) {
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
    .map((el) => {
      const r = {
        ...el,
        /** 虚拟路径，因为思源模式的笔记会在文件名后面加上 id,而这个值会去除掉那些id */
        get virtual_path() {
          return 去除思源笔记id的路径(el.fullSrc);
        },
      };
      return r;
    })
    .sort((a, b) => b.mtimeMs - a.mtimeMs);

  const menu = allFile.filter((el) => el.isDirectory);
  return {
    allFile,
    md_file,
    menu,
  };
}

export function ToWebSitePath(d: docFileNode) {
  if (d.isDirectory) {
    return (d.fullSrc.replace(doc_path, "") + "/").replace(/** 网络路径通常使用 / */ /[\\\/]/g, "/");
  } else {
    return (去除思源笔记id的路径(d.fullSrc).replace(doc_path, "").slice(/** 去除 .md  */ 0, -3) + ".html").replace(
      /** 网络路径通常使用 / */ /[\\\/]/g,
      "/",
    );
  }
}
export let 文档资源 = main();

/** 会触发更新资源的流程 */
export async function 获取文档资源(强制刷新 = false) {
  if (强制刷新) {
    文档资源 = main();
    oldTime = Date.now();
  } else {
    if (Date.now() - oldTime > 24 * 60 * 60 * 1000) {
      oldTime = Date.now();
      setTimeout(() => {
        文档资源 = main();
      }, 100);
    }
  }
  return 文档资源;
}
