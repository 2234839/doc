import type { IncomingMessage } from "http";
import * as apis from "../../lib/api/apis";
import { 直接调用 } from "../../lib/api/fetch";
/** post 接口做预览之用 */
export async function post(req: IncomingMessage, res: any) {
  // console.log(req, req.params, req.query);
  const data = [] as any[];
  req.on("data", function (chunk) {
    data.push(chunk);
  });
  req.on("end", async () => {
    const { method, data: _data } = JSON.parse(data.join(""));

    const result = await 直接调用(apis, method, _data);
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(result));
  });
}
