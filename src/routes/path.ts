// import { try_pathToMd } from "../lib/md-parser";

export async function preload(this: context, page: page, session: any) {
  const res = await this.fetch(`https://shenzilong.cn${page.path.replace(/\.html/, ".json")}`);
  console.log("请求地址", page.path,res.ok);
  // try_pathToMd(page.path);
  if (!res.ok) {
    /** 报错 404 */
    return this.error(404, "Not found");
  }

  const article = await res.json();
  return { time: Date.now(), page, html: article.raw_html, title: article.title };
}

type context = {
  fetch: typeof fetch;
  error: (arg0: number, arg1: string) => any;
};
type page = {
  host: /** "localhost:3000"  */ string;
  path: /** "/正则.md" */ string;
  query: /** {} */ any;
  params: /**  {
    path: "正则.md";
  } */ any;
};
