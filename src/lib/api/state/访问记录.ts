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
}

stateASyncFile(table, { filePath: join(root_path, "state/访问记录.json") });

/** 有人访问了指定路径,记录一下浏览数 */
export function 踩一踩(path: string, browser = false) {
  if (!(path in table)) {
    table[path] = new 访问记录();
  }
  table[path] = Object.assign(new 访问记录(), table[path]);
  table[path].readCount += 1;
  if (browser) {
    table[path].browser_js_count += 1;
  }
}

export function get访问记录(path: string) {
  return table[path] || new 访问记录();
}
