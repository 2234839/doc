import cheerio from 'cheerio';
import { promises as fs } from 'fs';
import * as Path from 'path';
import { doc_html_path } from '../env';

let oldTime = Date.now();
type article = {
	title: string;
	meta: any;
	html?: string;
	raw_html?: string;
};
interface docObj {
	fullSrc: string;
	mtimeMs: number;
	isDirectory: boolean;
	basename: string;
	getViewInfo: () => Promise<article>;
}
/** 文档的具体文件信息节点 */
type docFileNode = {
	fullSrc: string;
	mtimeMs: number;
	/** 是目录节点 */ isDirectory: boolean;
	basename: string;
};
export async function 获取项目下所有文件(src: string) {
	// 读取目录中的所有文件/目录
	const paths = await fs.readdir(src);
	const r: docObj[] = (
		await Promise.all(
			paths.map(async (path) => {
				//拼合路径
				const fullSrc = Path.resolve(src + '/' + path);
				//判断文件状态
				const st = await fs.stat(fullSrc);
				// 判断是否为文件
				const isDirectory = st.isDirectory();
				const docObj = {
					fullSrc,
					mtimeMs: st.mtimeMs,
					isDirectory,
					basename: Path.basename(fullSrc),
					async getViewInfo() {
						const targetPath = fullSrc;
						const rawHtml = (
							await fs.readFile(targetPath).catch((e) => {
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
							meta: [],
							html: html
						};
					}
				};

				// 如果是目录则递归调用自身
				if (isDirectory && !['.git', 'node_modules', 'assets'].includes(docObj.basename)) {
					return [docObj, ...(await 获取项目下所有文件(fullSrc))];
				} else {
					return [docObj];
				}
			})
		)
	).flat(1);
	return r;
}

export const 最近更新 = [];

async function main() {
	const allFile = await 获取项目下所有文件(doc_html_path);
	const md_file = (
		await Promise.all(
			allFile
				.filter((el) => !el.isDirectory && el.fullSrc.endsWith('.html'))
				.map(async (el) => {
					const root = cheerio.load((await el.getViewInfo()).html || '');
					const docRoot = root('main[data-type=NodeDocument]');

					const data = { ...docRoot.data(), updated: Number(docRoot.attr('updated')) } as {
						blockId?: '20210325155155-2wk7rxv';
						type?: 'NodeDocument';
						updated: number;
					};

					return {
						...el,
						/** 虚拟路径，因为思源模式的笔记会在文件名后面加上 id,而这个值会去除掉那些id */
						virtual_path: el.fullSrc,
						// TODO: 待修正 为正确的id
						fileID: data?.['blockId'],
						/** 文本源码 */
						webPath: ToWebPath(el),
						docData: data
					};
				})
		)
	)
		.filter((el) => el.docData?.type === 'NodeDocument')
		.sort((a, b) => (b.docData.updated || b.mtimeMs) - (a.docData.updated || a.mtimeMs));

	const menu = allFile.filter((el) => el.isDirectory);
	const r = {
		allFile,
		md_file,
		menu
	};
	console.log(
		`刷新资源完毕， 共有 ${md_file.length} 篇文`,
		completedDocumentResources ? `原有 ${completedDocumentResources.md_file.length} 篇` : ''
	);
	completedDocumentResources = r;
	return r;
}

/** 注意没有带上web前缀 */
export function ToWebPath(d: docFileNode) {
	if (d.isDirectory) {
		return (d.fullSrc.replace(doc_html_path, '') + '/').replace(
			/** 网络路径通常使用 / */ /[\\\/]/g,
			'/'
		);
	} else {
		return d.fullSrc.replace(doc_html_path, '').replace(/** 网络路径通常使用 / */ /[\\\/]/g, '/');
	}
}
export function getName(d: docObj) {
	if (d.isDirectory) {
		return './' + d.basename + '/';
	} else {
		return d.basename.replace(/.html$/, '');
	}
}
// TODO  这里使用中文变量名 vite ssr 会报语法错误
/** 文档资源 */
export let documentResource = main();
/** 没有准备好的时候是 null，准备好的文档资源 */
export let completedDocumentResources = null as null | unPromise<typeof documentResource>;

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
