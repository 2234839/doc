// import { try_pathToMd } from "../lib/md-parser";
export async function preload(page, session) {
    console.log("[请求地址]", page.path, page.query.requester);
    if (page.query.requester === "sapper") {
        /** 自己发的请求，404掉让nginx去访问其他服务器，不然下面会一直递归请求 */
        console.log("[404]", page);
        return this.error(404, "Not found");
        // return this.redirect(302, page.host);
    }
    const res = await this.fetch(`https://shenzilong.cn${page.path.replace(/\.html/, ".json")}?requester=sapper`);
    console.log("请求地址", page.path, res.ok, res.status);
    // return this.error(404, "Not found");
    // try_pathToMd(page.path);
    if (!res.ok) {
        /** 报错 404 */
        return this.error(404, "Not found");
    }
    const article = await res.json();
    console.log("[article.raw_html.length]", article.raw_html.length);
    return { time: Date.now(), page, html: article.raw_html, title: article.title };
}
