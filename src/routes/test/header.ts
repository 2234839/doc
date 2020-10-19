/** post 接口做预览之用 */
export async function post(req: any, res: any) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(req.headers));
}
