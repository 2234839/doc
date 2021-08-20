import { promises as fs } from 'fs';
import * as Path from 'path';
import { doc_html_path } from '../env';

let oldTime = Date.now();
type article = {
	title: string;
	html?: string;
	raw_html?: string;
};
export class DocObj {
	fullSrc: string;
	isDirectory: boolean;
	mtimeMs: number;
	basename: string;
	public async getViewInfo(): Promise<article> {
		const targetPath = this.fullSrc;
		const rawHtml = (
			await fs.readFile(targetPath).catch(() => {
				console.log('[targetPath] 读取失败', targetPath);
				return '<程序内部错误，读取资源文件失败>';
			})
		).toString();
		const titleRes = rawHtml.match(/<title>([\s\S]*)<\/title>/);
		const title = titleRes === null ? '无题' : titleRes[1];

		/** 去除原始文件开头的一些脚本引入 */
		const html = rawHtml.replace(/[\s\S]*?<\/head>/, '');
		return {
			title,
			html: html
		};
	}
}

export async function getAllFileFromProject(src: string) {
	// 读取目录中的所有文件/目录
	const paths = await fs.readdir(src);
	const r: DocObj[] = (
		await Promise.all(
			paths.map(async (path) => {
				//拼合路径
				const fullSrc = Path.resolve(src + '/' + path);
				//判断文件状态
				const st = await fs.stat(fullSrc);
				// 判断是否为文件
				const isDirectory = st.isDirectory();
				const docObj = new DocObj();
				docObj.basename = Path.basename(fullSrc);
				docObj.mtimeMs = st.mtimeMs;
				docObj.fullSrc = fullSrc;
				docObj.isDirectory = isDirectory;

				// 如果是目录则递归调用自身
				if (isDirectory && !['.git', 'node_modules', 'assets'].includes(docObj.basename)) {
					return [docObj, ...(await getAllFileFromProject(fullSrc))];
				} else {
					return [docObj];
				}
			})
		)
	).flat(1);
	return r;
}

async function main(): Promise<{
	allFile: DocObj[];
	md_file: {
		docObj: DocObj;
		fileID: string;
		webPath: string;
		docData: {
			type?: 'NodeDocument';
			updated: number;
		};
	}[];
	menu: DocObj[];
}> {
	try {
		const json = (await fs.readFile('./state/allFile.json')).toString();
		return JSON.parse(json, (key, value) => {
			if (key === 'allFile') {
				return value.map(transform);
			} else if (key === 'docObj') {
				return transform(value);
			}
			return value;
		});
	} catch (e) {
		return await (await import('./资源编译')).BuildDoc();
	}

	function transform(el: DocObj): DocObj {
		const obj = new DocObj();
		Object.assign(obj, el);
		return obj;
	}
}

/** 注意没有带上web前缀 */
export function ToWebPath(d: {
	fullSrc: string;
	/** 是目录节点 */ isDirectory: boolean;
	basename: string;
}) {
	if (d.isDirectory) {
		return (d.fullSrc.replace(doc_html_path, '') + '/').replace(
			/* eslint-disable no-useless-escape */ //  eslint 规则的bug
			/** 网络路径通常使用 /  */ /[\\/]/g,
			'/'
		);
	} else {
		return d.fullSrc.replace(doc_html_path, '').replace(/** 网络路径通常使用 / */ /[\\\/]/g, '/');
	}
}
export function getName(d: Pick<DocObj, 'isDirectory' | 'basename'>) {
	if (d.isDirectory) {
		return './' + d.basename + '/';
	} else {
		return d.basename.replace(/.html$/, '');
	}
}
// TODO  这里使用中文变量名 vite ssr 会报语法错误
/** 文档资源 */
export let documentResource = main();

/** 会触发更新资源的流程 */
export async function 获取文档资源(强制刷新 = false) {
	if (强制刷新) {
		documentResource = main();
		oldTime = Date.now();
	} else {
		if (Date.now() - oldTime > 24 * 60 * 60 * 1000) {
			oldTime = Date.now();
			setTimeout(() => {
				documentResource = main();
			}, 100);
		}
	}
	return documentResource;
}
