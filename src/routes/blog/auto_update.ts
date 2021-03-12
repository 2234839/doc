import { exec } from "child_process";
import { root_path } from "../../lib/env";
import { 获取文档资源 } from "../../lib/资源检索/最近更新";
/** post 接口做预览之用 */
export async function get(req: any, res: any) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ code: 200 }));
  /** 更新代码，刷新博客内容 */
  exec("git pull", { cwd: root_path }, (e, stdout) => {
    if (e) {
      console.log("[更新代码博客失败]", e);
    } else {
      console.log("[更新成功]");
      exec(
        `../app/md2website/linux_md2website "/root/doc/doc" "./docHTML" "/root/app/md2website/views/" "/root/app/md2website/siyuan.db"`,
        { cwd: root_path },
        (e, stdout) => {
          if (e) {
            console.log("[编译html失败]", e);
          } else {
            console.log("[编译html成功]", stdout);
          }
        },
      );
      exec(
        `./ossutil64 sync -f -u ../doc/doc oss://store-llej/doc/`,
        { cwd: "/root/app" },
        (e, stdout) => {
          if (e) {
            console.log("[上传阿里云 oss 失败]", e);
          } else {
            console.log("[上传阿里云 oss 成功]", stdout);
          }
        },
      );
      /** 去触发一次更新 */
      获取文档资源(true);
    }
  });
}

export const post = get;
