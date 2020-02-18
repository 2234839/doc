/** 配置mermaid */
mermaid.initialize({
  startOnLoad: true,
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
  },
  theme: "forest",
});
const mermaidAPI = mermaid.mermaidAPI;

/** 高亮代码块 */
let code = document.querySelectorAll(`[class*="lang"]`);
if (code === null) throw "未找到code块";
code = Array.from(code);
require.config({
  paths: { vs: "/node_modules/monaco-editor/min/vs" },
});
// delete define.amd

const div_list = code.map(function(el) {
  const div = document.createElement("div");
  el.parentElement.appendChild(div);
  div.style = `
     width: 100%;
     margin-bottom: 10px;
   `;
  if ("run" in el.attributes) {
    //立即执行代码
    runCode({
      code: el.innerText,
      lang: getLanguage(el),
      el: el.parentElement,
    });
  }
  return div;
});

require(["vs/editor/editor.main"], function(monaco) {
  div_list.map((div) => {
    const el = div.parentElement.querySelector(`[class*="lang"]`);
    /** 隐藏起来的元素不需要编辑 */
    if (el.classList.contains("hidden")) return;
    el.style.display = "none";
    var editor = monaco.editor.create(div, {
      value: el.innerText,
      language: getLanguage(el),
      minimap: {
        enabled: false, //代码略缩图
      },
      theme: "vs",
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
    editorAdapaHeight(editor, div);
    editor.onDidChangeModelContent((e) => {
      editorAdapaHeight(editor, div);
      if ("run" in el.attributes)
        runCode({
          code: editor.getValue(),
          lang: getLanguage(el),
          el: el.parentElement,
        });
    });
  });
});
/**
 * 获取代码块的所使用的语言
 * @param {HTMLElement} el
 */
function getLanguage(el) {
  return el.className.match(/lang-(.*)\b/)[1];
}
/**
 * 根据内容来计算高度
 * @param {HTMLElement} editor
 * @param {HTMLElement} div
 */
function editorAdapaHeight(editor, div) {
  let lines = editor.getModel().getLinesContent().length;
  div.style.height = lines * 19.2 + "px";
}

/**
 * 执行代码
 * @param {Object} par - 参数对象
 * @param {string} par.code - 要执行的代码
 * @param {string} par.lang - 代码所属的语言
 * @param {HTMLElement} par.el - 代码要插入的元素
 */
function runCode({ code, lang, el }) {
  console.log(lang, el);

  /** 在这个页面是否是第一次执行 */
  let init = false;
  if (el.querySelector(".run-code") === null) {
    //第一次执行,生成存放代码的地方
    init = true;
    const code_el = document.createElement("div");
    el.insertBefore(code_el, el.firstChild);
    code_el.classList.add("run-code");
  }
  const code_el = el.querySelector(".run-code");
  //针对不同语言进行不同的执行方法
  if (lang === "html") {
    code_el.innerHTML = code;
    if (!init) return;
    setTimeout(() => {
      //使用setTimeout让它报错也不要影响编辑器的存在
      const script_list = Array.from(code_el.querySelectorAll("script"));
      /** 计数script加载几个了 */
      let load_count = 0;
      /** 动态引入 */
      const src_script = script_list.filter((el) => el.src);
      const no_src_script = script_list.filter((el) => !el.src);
      if (src_script.length === 0) {
        no_src_script.forEach((el) => eval(el.innerHTML));
      }
      src_script.map((el) => {
        let script = document.createElement("script");
        script.onload = () => {
          load_count++;
          if (load_count === src_script.length) {
            /** 带src属性的加载完后再执行script标签内容 */
            script_list.forEach((el) => eval(el.innerHTML));
          }
        };
        script.src = el.src;
        code_el.appendChild(script);
      });
    }, 0);
    return;
  }
  if (lang === "css") {
    code_el.innerHTML = `<style>${code}</style>`;
  }
  if (lang === "javascript") {
    eval(code);
  }

  if (lang === "mermaid") {
    const id = `graphDiv${Date.now()}`;
    code_el.id = id;
    console.log(code_el);
    code_el.style.display = "";
    var graphDefinition = code;
    /** svg源码 */
    code_el.innerHTML = mermaidAPI.render(id, graphDefinition);
    el.insertBefore(code_el, el.firstElementChild);
  }
}

/** 导航 */
(function() {
  "use strict";
  const menu = document.querySelectorAll("h1,h2,h3,h4,h5,h6,h7,h8");
  const container = document.querySelector("#崮生_userjs_导航") || document.createElement("details");
  if (document.querySelector("html").offsetWidth >= 1200) container.setAttribute("open", "");
  container.id = "#崮生_userjs_导航";
  container.innerHTML = `<summary>目录</summary>`;
  container.style = `
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 1rem;
    top: 1rem
  `;
  document.body.appendChild(container);

  menu.forEach((h) => {
    const level = Number(h.tagName.replace("H", ""));
    const { textContent: title, id } = h;

    const item = document.createElement("a");
    /** 反复横跳是因为中文id在href中是跳不过去的 */
    item.href = "#" + encodeURIComponent(decodeURIComponent(id));
    item.style.marginLeft = level + "rem";
    item.textContent = title;
    container.appendChild(item);
  });
})();

/** md 链接的跳转 */ (function() {
  const a = document.querySelectorAll("a[md_to_html]");
  a.forEach((a) => {
    a.href = a.href.replace(/\.md$/, ".html");
  });
})();
