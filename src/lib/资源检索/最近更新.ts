import * as fs from "fs/promises";
import * as Path from "path";
import { doc_path } from "../env";
import { 去除思源笔记id的路径, 获取思源笔记id的路径 } from "../md解析/lute";

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
  const md_file = (
    await Promise.all(
      allFile
        .filter((el) => !el.isDirectory && el.fullSrc.endsWith(".md"))
        .map(async (el) => {
          const mdStr = await fs.readFile(el.fullSrc, { encoding: "utf8" });
          const r = {
            ...el,
            /** 虚拟路径，因为思源模式的笔记会在文件名后面加上 id,而这个值会去除掉那些id */
            virtual_path: 去除思源笔记id的路径(el.fullSrc),
            fileID: 获取思源笔记id的路径(el.fullSrc),
            /** 文本源码 */
            mdStr,
            webPath: ToWebPath(el),
          };
          return r;
        }),
    )
  ).sort((a, b) => b.mtimeMs - a.mtimeMs);

  const menu = allFile.filter((el) => el.isDirectory);
  const r = {
    allFile,
    md_file,
    menu,
  };
  console.log(
    `刷新资源完毕， 共有 ${md_file.length} 篇文`,
    已准备好的文档资源 ? `原有 ${已准备好的文档资源.md_file.length} 篇` : "",
  );
  已准备好的文档资源 = r;
  return r;
}

/** 注意没有带上web前缀 */
export function ToWebPath(d: docFileNode) {
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
/** 没有准备好的时候是 null */
export let 已准备好的文档资源 = null as null | unPromise<typeof 文档资源>;

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
