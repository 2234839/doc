import type { Middleware, Polka, Request } from "polka";
import "zone.js";

let log = console.log;
interface reqZone {
  ip: string;
  start: Date;
  id: number;
  msg: [number, unknown[]][];
  url: string;
}
function curZoneGet<K extends keyof reqZone>(k: K, zone?: Zone): reqZone[K] {
  return (zone ?? Zone.current).get(k);
}
let requestId = 0;

console.log = (...args: unknown[]) => {
  if (Zone.current.name === "reqZone") {
    curZoneGet("msg").push([Date.now(), args]);
  } else {
    log(...args);
  }
};

/** 重写了 log 函数，通过 zone 来将 next 运行期间打印的 log 收集到一起直到请求结束后统一 log */
export const ReqZoneMiddleware: Middleware<Request> = function (
  req,
  res,
  next,
) {
  const id = requestId++;
  const ip =
    req.headers["X-Real-IP"] ??
    req.headers["x-real-ip"] ??
    req.headers["X-Forwarded-For"] ??
    req.headers["x-forwarded-for"] ??
    req.socket.remoteAddress;
  const reqZone = Zone.root.fork({
    name: "reqZone",
    properties: {
      ip,
      start: new Date(),
      id,
      msg: [],
      url: req.url,
    } as reqZone,
  });
  reqZone.run(next);

  res.once("close", function () {
    const ip = curZoneGet("ip", reqZone);
    const start = curZoneGet("start", reqZone);
    const id = curZoneGet("id", reqZone);
    const startS = start.getTime();

    log(
      `start: ${id} , ${ip} , ${start.toLocaleString()} : ${curZoneGet(
        "url",
        reqZone,
      )}`,
    );
    curZoneGet("msg", reqZone).forEach(([t, args]) => {
      log("  ", t - startS + "ms\t", ...args);
    });
    log(
      `end  : ${new Date().toLocaleString()} 总耗时${
        Date.now() - startS
      }ms\n--------`,
    );
  });
};
