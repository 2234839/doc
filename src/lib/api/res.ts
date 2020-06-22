export namespace Res {
  export function successful(res: any, msg: string, data: unknown) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ code: 1, msg, data }));
  }
  export function failure(res: any, msg: string, data?: unknown) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ code: -1, msg, data }));
  }
}
