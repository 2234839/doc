/** 高亮代码块 */
const code = document.querySelectorAll(`[class*="lang"]`);
if (code === null) throw "未找到code块";
require.config({ paths: { vs: "/node_modules/monaco-editor/min/vs" } });
// "vs/editor/editor.main"
require(["vs/editor/editor.main"], function() {
  code.forEach(function(el) {
    const div = document.createElement("div");
    el.parentElement.appendChild(div);
    div.style = `
       width: 100%;
       margin-bottom: 10px;
     `;
    el.style.display = "none";
    if ("run" in el.attributes) {
      //立即执行代码
      runCode({
        code: el.innerText,
        lang: getLanguage(el),
        el: el.parentElement,
      });
    }

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
    editoAdapHeight(editor, div);

    editor.onDidChangeModelContent((e) => {
      editoAdapHeight(editor, div);
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
function editoAdapHeight(editor, div) {
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
  const lang_label = {
    javascript: "script",
    html: "div",
  };
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
}
