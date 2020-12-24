import path from "path";
const server_path = __dirname;
export const root_path = path.resolve(__dirname, "../../../");
/** 文档目录地址 */
export const doc_path = path.resolve(root_path, "./doc");
export const doc_html_path = path.resolve(root_path, "./docHTML");
export const client_path = path.resolve(server_path, "../client");

console.log({ root_path, doc_path, client_path });
