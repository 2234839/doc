import { join } from 'path';
import { reactive } from 'vue';
import { root_path } from '../../env';
import { stateASyncFile } from '../../state/state';

type info = {
	count: number;
};

const table = reactive({
	pathMatch: {} as { [regExp: string]: info }
});

stateASyncFile(table, { filePath: join(root_path, 'state/黑名单.json') });
