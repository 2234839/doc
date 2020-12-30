import { isReactive } from "vue";
import { API } from "./api/fetch";

export async function preload(this: context, page: page, session: any) {
  console.log("[请求地址]", page);
  const path = decodeURIComponent(page.path);
  setTimeout(() => {
    API.踩一踩(path);
  });
  const 访问记录 = await API.get访问记录(path);

  if (page.query.requester === "sapper") {
    /** 自己发的请求，404掉让nginx去访问其他服务，不然下面会一直递归请求 */
    console.log("[404]", page);
    return this.error(404, "Not found");
  }
  if (path.endsWith(".html")) {
    const res = await this.fetch(`/article.json?path=${path.replace(/\.html/, ".md")}?requester=sapper`);

    if (!res.ok) {
      console.log("404", path);
      /** 报错 404 */
      return this.error(404, "请求失败");
    }

    const article = await res.json();
    if (article.code === -1) {
      return this.error(200, "Not found");
    }
    return { time: Date.now(), page, article: article, title: article.title, 访问记录 };
  } else if (path.endsWith("/")) {
    const menu = await this.fetch("/menu.json?path=" + path).then((r) => {
      return r.json();
    });
    const title = decodeURIComponent(path)
      .split(/[\/\\]/)
      .filter((el) => el)
      .reverse()
      .join("<");
    return { time: Date.now(), page, menu, title, 访问记录 };
  } else {
    console.log("404", path);
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
