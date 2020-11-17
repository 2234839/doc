import { resolve } from "path";
import { lute } from "./md解析/lute";

/** 解析文章md */
export async function md_parser_article(md_str: string): Promise<article> {
  const title = md_str.match(/(?<=^# ).*/) || ["无题"];

  const header = md_str.match(/(?<=^# .*?\n).*?(?=^---)/ms) || [""];
  const meta: { [name: string]: string[] } = {};
  header[0]
    .split("\n")
    .filter((str) => str.startsWith("- "))
    .forEach((str) => {
      const key = str.match(/(?<=- ).*?(?=:)/);
      if (key === null) throw "没有找到匹配的属性";
      const value = str.match(/(?<=:).*/);
      if (value === null) throw "没有找到匹配的值";
      meta[key[0]] = value[0].split(",");
    });

  const raw_html = lute.MarkdownStr("", md_str);
  return {
    title: title[0],
    meta,
    html: raw_html,
    md: md_str,
  };
}

export function try_pathToMd(path: string) {
  md_parser_article(resolve(__dirname, path)).then((r) => {
    console.log("解析成功", r);
  });
}

export type article = {
  title: string;
  meta: any;
  html?: string;
  raw_html?: string;
  /** markdown 源码 */
  md: string;
};
