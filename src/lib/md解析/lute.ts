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
  renderBlockEmbed(node: any) {
    const id = node.TokensStr().slice(3, 25);
    return [
      `<div title="尚未开发完成，完成后应该直接渲染对应部分的数据">
    <a href="${blockIDToWebPath(已准备好的文档资源, id)}">块引用-> ${node.TokensStr()}</a>
  </div>`,
      Lute.WalkStop,
    ];
    const mdStr = blockIDToCode(已准备好的文档资源, id);
    if (mdStr) {
      return [
        `<div>
      <a href="${blockIDToWebPath(已准备好的文档资源, id)}">下面的内容引用自 ${node.TokensStr()}</a>
      ${lute.MarkdownStr("", mdStr)}</div>`,
        Lute.WalkStop,
      ];
    } else {
      return [`[[${id}]]`, Lute.WalkStop];
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
/** 开启术语修正的话会默认在中西文之间插入空格。这个会导致链接有一些问题 */
lute.SetFixTermTypo(false);

/** 设置块id 的形式 */
lute.SetKramdownIALIDRenderName("data-block-id");

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

/** 获取该块 id 所在的源码 */
export function blockIDToCode(resource: unPromise<typeof 文档资源> | null, blockId: string) {
  const mathStr = `{: id="${blockId}"}`;
  const doc = resource?.md_file?.find((el) => el.mdStr.includes(mathStr));
  /** 应该要想办法处理嵌入内容的相对路径 */
  if (doc) {
    if (doc.mdStr.includes(mathStr)) {
      const restCode = doc.mdStr.split(mathStr)[0];
      // {: id="20201107140928-52vsngq"}
      const chunk = restCode.split(/^{: id="\d{14}-.{7}"}/gm).filter((el) => el != "\n");
      console.log("[chunk]", chunk);
      return chunk[chunk.length - 1];
    } else {
      /** 嵌入了整个页面 */
      return doc.mdStr;
    }
  } else {
    return null;
  }
}
