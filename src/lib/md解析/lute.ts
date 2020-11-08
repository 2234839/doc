import { 已准备好的文档资源, 文档资源, 获取文档资源 } from "../资源检索/最近更新";
import { LuteCode } from "./lute.code";

// 执行 Lute 的代码
new Function("exports", "require", "module", "__filename", "__dirname", LuteCode)(
  exports,
  require,
  module,
  __filename,
  __dirname,
);
const Lute = (global as any).Lute;
export const lute = Lute.New();
// 缺陷
// 1. 这里说明了自定义渲染器无法异步的获取数据 https://github.com/88250/lute/issues/105
// 支持重写渲染器 https://github.com/88250/lute/issues/5

let BlockRefID = "";
let html2MdRenderer = {
  renderBlockRefID(node: any) {
    BlockRefID = node.TokensStr();
    return ["", Lute.WalkContinue];
  },
  renderBlockRefText(node: any) {
    const src = blockIDToWebPath(已准备好的文档资源, BlockRefID);
    if (src) {
      return [`<a href="${src}">${node.TokensStr()}</a>`, Lute.WalkStop];
    } else {
      return [`[[ ${node.TokensStr()} ]]`, Lute.WalkStop];
    }
  },
};
lute.SetJSRenderers({
  renderers: {
    Md2HTML: html2MdRenderer,
  },
});

/** 对引用块进行渲染 */
lute.SetBlockRef(true);
/** 渲染 id （渲染为空） */
lute.SetKramdownIAL(true);
/** 标题的链接 a 标签渲染 */
lute.SetHeadingAnchor(true);
/** 开启术语修正的话会默认在中西文之间插入空格。 */
lute.SetFixTermTypo(true);

/** 设置块id 的形式 */
lute.SetKramdownIALIDRenderName("data-block-id");

// http://192.168.11.2/bool_dev_team/npp_beta/issues/63
// https://github.com/2234839/wxtool/issues/1

export function 去除思源笔记id的路径(path: string) {
  if (path.endsWith(".sy.md")) {
    return path.slice(0, -29) + ".md";
  } else {
    return path;
  }
}

export function 获取思源笔记id的路径(path: string) {
  return path.slice(-28, -6);
}

export function blockIDToWebPath(resource: unPromise<typeof 文档资源> | null, blockId: string) {
  const mathStr = `{: id="${blockId}"}`;
  const doc = resource?.md_file?.find((el) => el.fileID === blockId || el.mdStr.includes(mathStr));
  if (doc) {
    if (doc.mdStr.includes(mathStr)) {
      return `${doc?.webPath}?&blockId=${blockId}`;
    } else {
      return doc?.webPath;
    }
  } else {
    return null;
  }
}
