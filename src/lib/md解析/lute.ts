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

// 支持重写渲染器 https://github.com/88250/lute/issues/5
let html2MdRenderer = {
  //@
  //@ts-ignore
  // BlockRef: function (node, entering) {
  //   console.log("重写 Bang 节点", node.TokensStr(), entering);
  //   return ["!", Lute.WalkStop];
  // },
};
lute.SetJSRenderers({
  renderers: {
    HTML2Md: html2MdRenderer,
  },
});

/** 对引用块进行渲染 */
lute.SetBlockRef(true)
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
