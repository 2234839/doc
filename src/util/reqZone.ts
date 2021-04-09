import type { Middleware, Polka, Request } from "polka";
import "zone.js";
import IsBot from "isbot";
let log = console.log;
interface reqZone {
  ip: string;
  start: Date;
  id: number;
  msg: [number, unknown[]][];
  url: string;
  ua: string;
  isBot: boolean;
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
  const ip = String(
    req.headers["X-Forwarded-For"] ??
      req.headers["x-forwarded-for"] ??
      req.socket.remoteAddress,
  ).split(",")[0];

  const ua = req.headers["user-agent"] ?? "";
  const isBot = IsBot(ua);
  const reqZone = Zone.root.fork({
    name: "reqZone",
    properties: {
      ip,
      start: new Date(),
      id,
      msg: [],
      url: req.url,
      ua,
      isBot,
    } as reqZone,
  });
  reqZone.run(next);

  const curZone: typeof curZoneGet = (k, zone = reqZone) => curZoneGet(k, zone);
  res.once("close", function () {
    const ip = curZone("ip");
    const start = curZone("start");
    const id = curZone("id");
    const ua = curZone("ua");
    const isBot = curZone("isBot");
    const startS = start.getTime();

    const prefix = "  ";

    log(`start: ${id} , ${ip} , ${start.toLocaleString()} : ${curZone("url")}`);
    if (isBot) {
      log(`${prefix} isBot: ${ua}`);
    }
    curZone("msg").forEach(([t, args]) => {
      log(prefix, t - startS + "ms\t", ...args);
    });
    log(
      `end  : ${new Date().toLocaleString()} 总耗时${
        Date.now() - startS
      }ms\n--------`,
    );
  });
};
