import { API } from "./api/fetch";

export async function preload(this: context, page: page, session: any) {
  const path = decodeURIComponent(page.path);
  setTimeout(() => {
    API.踩一踩(path);
  });
  const 访问记录 = await API.get访问记录(path);

  if (path.endsWith(".html")) {
    const htmlPath = path.replace(/\.html/, ".md");
    const res = await API.getArticleByPath(htmlPath);

    if (res.code === -1) {
      console.log("[path1]", path);
      /**
       * 对于在 routes 正则匹配范围内的文件（但 routes 没有提供服务）进行请求，
       * 如果直接进入 server.ts 中则可以正常被静态服务匹配中返回文件
       * 但如果在浏览器端就会再次陷入 preload 的逻辑判断，导致死循环
       * 所以这里使用 `return (location.href = path);` 来打破浏览器的行为
       */
      if ("location" in globalThis) {
        return (location.href = path);
      } else {
        return this.error(200, "Not found");
      }
    }
    const article = res.result;
    return {
      time: Date.now(),
      page,
      article: article,
      title: article.title,
      访问记录,
    };
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
    console.log("404 2", path);
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
