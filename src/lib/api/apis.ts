import { getName, ToWebPath, 获取文档资源 } from '../资源检索/最近更新';

/** 执行多个接口调用 */
export async function batchCall(...arg: [string, unknown[]][]) {
	return Promise.all(arg.map(([p, args]) => this[p](...args)));
}
export async function 获取最近更新() {
	const mdFile = (await 获取文档资源()).md_file;
	return mdFile.slice(0, 20).map((el) => {
		return {
			webPath: ToWebPath(el.docObj),
			name: getName(el.docObj)
		};
	});
}
export async function test(a: 1, b: number) {
	return [a, b];
}

export * from './blog';
export * from './state/访问记录';
export { find404Near } from './其他辅助/404页面导流';
export * from './数据聚合/rss';
export { 获取文档资源 } from '$lib/资源检索/最近更新';
