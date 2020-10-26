import { exec } from "child_process";
import { root_path } from "../../lib/env";
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
    }
  });
}

export const post = get;
