import { promises as fsPromise } from "fs";
import { root_path } from "../../lib/env";

/** post 接口做预览之用 */
export async function post(req: any, res: any) {
  // console.log("请求到达", req.query.path);
  const path = req.query.path as string;
  const filePath = root_path + path.replace(/\?.*$/, "");
  /** 还没想好权限校验怎么做，所以这里先不走 */
  return "";
}
