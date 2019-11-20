/** 高亮代码块 */
const code = document.querySelectorAll("code[run]");
if (code === null) throw "未找到code块";
require.config({ paths: { vs: "/node_modules/monaco-editor/min/vs" } });
require(["vs/editor/editor.main"], function() {
  code.forEach(function(el) {
    const div = document.createElement("div");
    el.parentElement.appendChild(div);
    /** 计算高度 */
    let lines = el.offsetHeight / 27;
    if (lines > 20) lines = 20;
    div.style = `
       height:${lines * 19 + "px"};
       width: 100%;
       margin-bottom: 10px;
     `;
    el.style.display = "none";
    var editor = monaco.editor.create(div, {
      value: el.innerText,
      language: getLanguage(el),

      minimap: {
        //代码略缩图
        enabled: false,
      },
      theme: "vs",
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
  });
});
function getLanguage(el) {
  return el.className.match(/lang-(.*)\\b/)[1];
}
