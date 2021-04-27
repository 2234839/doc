interface StateOptions {
	/** 这个状态存在的位置 */
	filePath: string;
}
import fsExtra from "fs-extra";
import { watchEffect } from 'vue';
const { ensureFile, readFile, writeFile } = fsExtra;
export async function stateASyncFile<T>(state: T, options: StateOptions) {
	let oldState: any;
	try {
		const f = (await readFile(options.filePath)).toString();
		oldState = JSON.parse(f);
	} catch (e) {
		await ensureFile(options.filePath);
	}
	Object.assign(state, oldState);

	watchEffect(() => {
		writeFile(options.filePath, JSON.stringify(state, null, 4));
	});
}
