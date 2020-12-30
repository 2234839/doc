import { join } from "path";
import { reactive } from "vue";
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
}

stateASyncFile(table, { filePath: join(root_path, "state/访问记录.json") });

/** 有人访问了指定路径,记录一下浏览数 */
export function 踩一踩(path: string, browser = false) {
  const log = getLog(path);
  log.readCount += 1;
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

export const get访问记录 = getLog;

function getLog(path: string) {
  path = decodeURIComponent(path);
  if (!(path in table)) {
    table[path] = new 访问记录();
  }
  table[path] = Object.assign(new 访问记录(), table[path]);
  return table[path];
}
