import path from 'path';

// 这里 vite 的 ssr 优化有问题导致 __dirname 无法正常使用 '
let serverPath = path.resolve(path.dirname(''));
// export const root_path = path.resolve(serverPath || '', '../../../');
export const root_path = serverPath;
/** 文档目录地址 */
// export const doc_path = path.resolve(root_path, './doc');
export const doc_html_path = path.resolve(root_path, './docHTML');
export const client_path = path.resolve(serverPath, '../client');

const { NODE_ENV } = process.env;
export const isDEV = NODE_ENV === 'development';
