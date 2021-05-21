import { getName, ToWebPath, 获取文档资源 } from '../资源检索/最近更新';

/** 执行多个接口调用 */
export async function batchCall(...arg: [string, unknown[]][]) {
	const thisModule = this;
	return Promise.all(arg.map(([p, args]) => thisModule[p](...args)));
}
export async function 获取最近更新() {
	return (await 获取文档资源()).md_file.slice(0, 20).map((el) => {
		return {
			webPath: ToWebPath(el),
			name: getName(el)
		};
	});
}
export async function test(a: 1, b: number) {
	return [1, 2];
}

export * from './blog';
export * from './state/访问记录';
export { find404Near } from './其他辅助/404页面导流';
export * from './数据聚合/rss';
