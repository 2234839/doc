// import { try_pathToMd } from "../lib/md-parser";

import { newLog } from "./log/ali_log";

export async function preload(this: context, page: page, session: any) {
  console.log("[请求地址]", page);
  if (page.query.requester === "sapper") {
    /** 自己发的请求，404掉让nginx去访问其他服务，不然下面会一直递归请求 */
    console.log("[404]", page);
    return this.error(404, "Not found");
  }
  if (page.path.endsWith(".html")) {
    // console.log(`/article.json?path=${page.path.replace(/\.html/, ".md")}?requester=sapper`)
    const res = await this.fetch(`/article.json?path=${page.path.replace(/\.html/, ".md")}?requester=sapper`);
    // console.log("[file res.ok]", res.ok);
    if (!res.ok) {
      /** 报错 404 */
      return this.error(404, "Not found");
    }
    const article = await res.json();
    return { time: Date.now(), page, article: article, title: article.title };
  } else if (page.path.endsWith("/")) {
    const menu = await this.fetch("/menu.json?path=" + page.path).then((r) => {
      return r.json();
    });
    const title = decodeURIComponent(page.path)
      .split(/[\/\\]/)
      .filter((el) => el)
      .reverse()
      .join("<");
    return { time: Date.now(), page, menu: menu, title };
  } else {
    return this.error(404, "Not found");
  }
}

type context = {
  fetch: typeof fetch;
  error: (arg0: number, arg1: string) => any;
  redirect: (arg0: number, arg1: string) => any;
};
type page = {
  host: /** "localhost:3000"  */ string;
  path: /** "/正则.md" */ string;
  query: /** {} */ any;
  params: /**  {
    path: "正则.md";
  } */ any;
};
