import cheerio from 'cheerio';
import { doc_html_path } from '$lib/env';

import { promises as fs } from 'fs';
import { DocObj, ToWebPath, 获取项目下所有文件 } from './最近更新';

export async function BuildDoc(): Promise<{
	allFile: DocObj[];
	md_file: {
		docObj: DocObj;
		fileID: '20210325155155-2wk7rxv';
		webPath: string;
		docData: {
			blockId?: '20210325155155-2wk7rxv';
			type?: 'NodeDocument';
			updated: number;
		};
	}[];
	menu: DocObj[];
}> {
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

					const r = {
						docObj: el,
						fileID: data?.['blockId'],
						webPath: ToWebPath(el),
						docData: data
					};
					return r;
				})
		)
	)
		.filter((el) => el.docData?.type === 'NodeDocument')
		.sort(
			(a, b) => (b.docData.updated || b.docObj.mtimeMs) - (a.docData.updated || a.docObj.mtimeMs)
		);

	const menu = allFile.filter((el) => el.isDirectory);
	const r = {
		allFile,
		md_file,
		menu
	};
	fs.writeFile('./allFile.json', JSON.stringify(r, null, 4));
	return r;
}
