import { promises as fsPromise } from "fs";
import { root_path } from "../../lib/env";
export function get(req: any, res: any) {
  fsPromise
    .readdir(root_path + req.query.path)
    .then((r) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      const menu = r
        .map((s) => {
          if (s.endsWith(".md")) {
            return {
              path: "./" + s.replace(/\.md$/, ".html"),
              title: s,
            };
          } else if (!s.includes(".")) {
            return {
              path: "./" + s + "/",
              title: s,
            };
          } else {
            return undefined;
          }
        })
        .filter((el) => el);
      console.log("[menu]", menu);
      res.end(JSON.stringify(menu));
    })
    .catch(() => {
      res.writeHead(500, {
        "Content-Type": "application/json",
      });
      res.end("未知错误");
    });
}