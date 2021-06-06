import { doc_html_path } from '$lib/env';
import { join } from 'path';
import { 获取文档资源 } from '../../资源检索/最近更新';

export async function getArticleByPath(path: string) {
	const filePath = join(doc_html_path, path.replace(/\?.*$/, ''));

	const docs = await 获取文档资源();

	/** 找对应的文档资源 */
	const doc = docs.md_file.find((el) => el.virtual_path === filePath);

	if (doc) {
		const result = await doc.docObj.getViewInfo();
		return { code: 1, result } as const;
	} else {
		return { code: -1, msg: '没有找到对应的文件' } as const;
	}
}
