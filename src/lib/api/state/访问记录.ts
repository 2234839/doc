import { join } from "path";
import { reactive, toRaw } from "vue";
import { isReqZone, reqZoneGet } from "../../../util/reqZone";
import { root_path } from "../../env";
import { stateASyncFile } from "../../state/state";

const table = reactive(
  {} as {
    [path: string]: 访问记录;
  },
);

class 访问记录 {
  readCount = 0;
  browser_js_count = 0;
  /** 赞 */
  praise = 0;

  botCount = {} as {
    [key: string]: number | undefined;
  };
}

stateASyncFile(table, { filePath: join(root_path, "state/访问记录.json") });

/** 有人访问了指定路径,记录一下浏览数 */
export function 踩一踩(path: string, browser = false) {
  const log = getLog(path);
  log.readCount += 1;

  /**
   * 爬虫机器人就不统计浏览器上报的了，不然 ssr 一次，浏览器一次，计数两次太多了
   */
  if (!browser && isReqZone() && reqZoneGet("isBot")) {
    const ua = reqZoneGet("ua");

    // 确保初始化
    if (log.botCount[ua] === undefined) {
      log.botCount[ua] = 0;
    }
    // 上面已经初始化了，所以这里使用 ! 断言
    log.botCount[ua]! += 1;
  }

  if (browser) {
    log.browser_js_count += 1;
  }
}
/** 有人访问了指定路径,记录一下浏览数 */
export function 点赞(path: string) {
  const log = getLog(path);
  log.praise++;
  return log.praise;
}

export const get访问记录 = (path: string) => {
  return JSON.parse(JSON.stringify(getLog(path)));
};

function getLog(path: string) {
  path = decodeURIComponent(path);
  if (!(path in table)) {
    table[path] = new 访问记录();
  }
  table[path] = Object.assign(new 访问记录(), table[path]);
  return table[path];
}
