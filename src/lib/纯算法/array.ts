/** 数组求和 */
export function ArraySum<T>(arr: T[], f: (el: T) => number) {
	return arr.map(f).reduce((a, b) => a + b, 0);
}

/** 从数组中随机取 n 个元素 */
export function sampleSize<T>([...arr]: T[], n = 1) {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr.slice(0, n);
}

/** 数组去重
 * 1. 可以设置函数来决定什么样算重复
 * 2. 可以设置函数来决定遇到重复的结果该怎么合并
 */
export function Array去重<T>(
	arr: T[],
	/** 需要返回该对象的一个唯一标识（需要是原始值 用于和其他的进行比较） */ f: (el: T) => unknown = (
		el: T
	) => el,
	/** 用于决定和重复对象的合并方式，默认取后面的值，丢弃旧值 */ mergeF: (a: T, b: T) => T = (
		a,
		b
	) => b
) {
	const result = [] as T[];
	const label = [] as unknown[];

	for (const el of arr) {
		const id = f(el);
		const i = label.findIndex((el) => el === id);
		if (i !== -1) {
			result[i] = mergeF(result[i], el);
		} else {
			label.push(id);
			result.push(el);
		}
	}

	return result;
}
