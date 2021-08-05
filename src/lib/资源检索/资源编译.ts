import { doc_html_path } from '$lib/env';

import { promises as fs } from 'fs';
import { DocObj, ToWebPath, getAllFileFromProject } from './最近更新';

export async function BuildDoc(): Promise<{
	allFile: DocObj[];
	md_file: {
		docObj: DocObj;
		fileID: '20210325155155-2wk7rxv';
		webPath: string;
		docData: {
			type?: 'NodeDocument';
			updated: number;
		};
	}[];
	menu: DocObj[];
}> {
	const allFile = await getAllFileFromProject(doc_html_path);
	const md_file = (
		await Promise.all(
			allFile
				.filter((el) => !el.isDirectory && el.fullSrc.endsWith('.html'))
				.map(async (el) => {
					const html = (await el.getViewInfo()).html;
					const main = html?.match(/<main[\s\S]+?data-type="NodeDocument"[\s\S]+?>/m)?.[0];
					if (!main && !el.fullSrc.endsWith('index.html')) {
						console.log(el.fullSrc, '解析失败');
					}
					const [attr, dataset] = parse(main || '');

					const data = { ...dataset, updated: Number(attr['updated']) } as {
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

function parse(s: string) {
	let curIndex = -1;

	let state = 'leisure' as 'leisure' | 'name' | 'value' | 'valuePre';
	const next = () => {
		curIndex += 1;
		return s[curIndex];
	};
	let name = '';
	let value = '';
	let attr = {} as { [key: string]: string };
	while (curIndex < s.length - 1) {
		const c = next();
		if (state === 'leisure') {
			if (c === '<' || c === '>') {
				attr = {};
				name = '';
				value = '';
			} else if (c === ' ') {
				//next
			} else {
				state = 'name';
				name += c;
			}
		} else if (state === 'name') {
			if (c === ' ') {
				name = '';
				state = 'leisure';
			} else if (c === '=') {
				state = 'valuePre';
			} else {
				name += c;
			}
		} else if (state === 'valuePre') {
			if (c === `"`) {
				state = 'value';
			}
		} else if (state === 'value') {
			if (c === `"`) {
				state = 'leisure';
				attr[name] = value;
				name = '';
				value = '';
			} else {
				value += c;
			}
		} else {
			const exhaustiveCheck: never = state;
		}
	}
	const dataset = {} as { [key: string]: string };
	for (const key in attr) {
		if (Object.prototype.hasOwnProperty.call(attr, key)) {
			const element = attr[key];
			if (key.startsWith(`data-`)) {
				const datasetKey = key
					.slice(5)
					.split('-')
					.map((el, index) => {
						if (index === 0) {
							return el;
						} else {
							return el[0].toUpperCase() + el.slice(1);
						}
					})
					.join('');
				dataset[datasetKey] = element;
			}
		}
	}
	return [attr, dataset];
}
