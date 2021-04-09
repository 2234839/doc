import { join } from "path";
import { reactive } from "vue";
import { root_path } from "../../env";
import { stateASyncFile } from "../../state/state";

type info = {
  count: number;
};

const table = reactive({
  pathMatch: {} as { [regExp: string]: info },
});

class 访问记录 {
  readCount = 0;
  browser_js_count = 0;
  /** 赞 */
  praise = 0;
}

stateASyncFile(table, { filePath: join(root_path, "state/黑名单.json") });
