import { exec } from "child_process";
import { log } from "console";
import type { IncomingMessage } from "http";
import type { Http2ServerRequest } from "http2";
import { root_path } from "../../lib/env";
/** post 接口做预览之用 ldsfoiu9071384ohjfaiou149814 */
export async function get(req: IncomingMessage, res: any) {
  const data = [] as any[];
  req.on("data", function (chunk) {
    data.push(chunk);
  });
  req.on("end", async () => {
    const payload = JSON.parse(data.join(""));
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if ((payload.ref as string).startsWith("refs/heads/gh-pages")) {
      res.end(JSON.stringify({ code: 200 }));
      /** 更新代码，刷新博客内容 */
      exec(
        "cd /root/doc/__sapper__ && " +
          "rm -rf /root/doc/__sapper__/doc && " +
          "git clone -b gh-pages git@github.com:2234839/doc.git && " +
          "\\cp -rf ./doc/build/ ./ && " +
          "pm2 reload blog",
        { cwd: root_path },
        (e, stdout) => {
          if (e) {
            console.log("[更新程序失败]", e);
          } else {
            console.log("[更新程序成功]");
            exec(
              `cd /root/doc/__sapper__/doc/ && \\cp -rf ./build/ ../build/ && pm2 reload blog`,
              { cwd: root_path },
              (e, stdout) => {
                if (e) {
                  console.log("[启动程序失败]", e);
                } else {
                  console.log("[启动程序成功]", stdout.toString());
                }
              },
            );
          }
        },
      );
    } else {
      console.log("[payload]", payload);

      return res.end(JSON.stringify({ code: 200 }));
    }
  });
}

export const post = get;
