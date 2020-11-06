/** 配置mermaid */
// mermaid.initialize({
//   startOnLoad: true,
//   flowchart: {
//     useMaxWidth: true,
//     htmlLabels: true,
//   },
//   theme: "forest",
// });
/** 用于存储 editorKey 相关的东西，挂载在code le上 */
const editorKey = "EDITOR_KEY";

export function run() {
  /** 动态生成的元素没有被svelte清除掉，所以这里主动将遗留下来的元素清掉 */
  document.querySelectorAll(".run-code").forEach((el) => el.remove());
  /** 高亮代码块 */
  let code_el = document.querySelectorAll(`[class*="lang"]`);
  if (code_el === null) throw "未找到code块";
  const code = Array.from(code_el);
  const div_list: [/** 放代码的div */ HTMLElement, /** 放编辑器的div */ HTMLElement][] = code.map(function (el) {
    const editorDiv = document.createElement("div");
    editorDiv.classList.add("g-editor_div");

    const fileName = el.getAttribute("file-name");
    if (fileName) {
      const 头部标题 = document.createElement("div");
      头部标题.classList.add("g-code_snippet", "flex", "items-center");
      const 文件icon = `<svg class="octicon octicon-code-square" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"></path></svg>`;
      头部标题.innerHTML = `${文件icon}  ${fileName}`;
      el.parentElement!.appendChild(头部标题);
    }
    el.parentElement!.appendChild(editorDiv);

    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("code-loading_div","g-flex-cc");
    loadingDiv.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
    `;
    loadingDiv.innerHTML=`<div class="loading"></div>`
    el.parentElement!.appendChild(loadingDiv);

    let resolve_cb;
    (el as any)[editorKey] = {
      editor: null,
      getEditor: new Promise((resolve) => {
        resolve_cb = resolve;
      }),
      resolve_cb: null,
    };
    (el as any)[editorKey]["resolve_cb"] = resolve_cb;
    // div.style.cssText = `width: 100%;margin-bottom: 10px;`;
    if ("run" in el.attributes) {
      //立即执行代码
      runCode({
        code: el.textContent!,
        lang: getLanguage(el as HTMLElement),
        el: el.parentElement!,
      });
    }
    return ([el, editorDiv] as unknown) as [HTMLElement, HTMLElement];
  });
  const show_editor = div_list.filter(([el, div]) => {
    /** 隐藏起来的元素不需要编辑 */
    if (el.classList.contains("hidden")) {
      return false;
    }
    return true;
  });
  if (show_editor.length) {
    console.log("开始加载代码", show_editor);
    //@ts-ignore
    // require.config({ paths: { vs: "/node_modules/monaco-editor/min/vs" } });
    require.config({
      paths: { vs: /** cdn 地址 */ "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.19.2/min/vs" },
    });
    //@ts-ignore
    require(["vs/editor/editor.main"], (
      //@ts-ignore
      monaco: typeof import("../node_modules/monaco-editor/esm/vs/editor/editor.api"),
    ) => {
      show_editor.forEach(([el, div]) => {
        console.log("[[el, div]]", [el, div]);
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
        (el as any)[editorKey].resolve_cb({ editor, monaco });

        editorAdapaHeight(editor, div);
        const loading_div = el.parentElement!.querySelector(".code-loading_div");
        if (loading_div) {
          loading_div.remove();
        }
        console.log("渲染完成");

        editor.onDidChangeModelContent((e: any) => {
          editorAdapaHeight(editor, div);
          if ("run" in el.attributes) {
            runCode({
              code: editor.getValue(),
              lang: getLanguage(el),
              el: el.parentElement!,
            });
          }
        });
      });
    });
  }

  /** 获取代码块的所使用的语言 */
  function getLanguage(el: HTMLElement) {
    return (el.className.match(/language-(.*)\b/) || [])[1];
  }
  /**
   * 根据内容来计算高度
   * @param {HTMLElement} editor
   * @param {HTMLElement} div
   */
  function editorAdapaHeight(editor: any, div: any) {
    let lines = editor.getModel().getLinesContent().length;
    div.style.height = lines * 19.4 + "px";
  }

  function runCode({ code, lang, el }: { code: string; lang: string; el: HTMLElement }) {
    console.log(lang, el);
    /** 在这个页面是否是第一次执行 */
    let init = false;
    let code_el = el.previousElementSibling as HTMLElement;
    if (!code_el.classList.contains("run-code")) {
      code_el = document.createElement("div");
      el.parentElement!.insertBefore(code_el, el);
      code_el.classList.add("run-code");
    }
    console.log("[code_el]", code_el);
    //针对不同语言进行不同的执行方法
    if (lang === "html") {
      code_el.innerHTML = code;
      if (!init) return;
      setTimeout(
        /** 使用setTimeout让它报错也不要影响编辑器的存在  */ () => {
          const script_list = Array.from(code_el.querySelectorAll("script"));
          /** 计数script加载几个了 */
          let load_count = 0;
          /** 动态引入 */
          const src_script = script_list.filter((el) => el.src);
          const no_src_script = script_list.filter((el) => !el.src);
          if (src_script.length === 0) {
            no_src_script.forEach((el) => window["eval"](el.innerHTML));
          }
          src_script.map((el) => {
            let script = document.createElement("script");
            script.onload = () => {
              load_count++;
              if (load_count === src_script.length) {
                /** 带src属性的加载完后再执行script标签内容 */
                script_list.forEach((el) => window["eval"](el.innerHTML));
              }
            };
            script.src = el.src;
            code_el.appendChild(script);
          });
        },
        0,
      );
      return;
    }
    if (lang === "css") {
      code_el.innerHTML = `<style>${code}</style>`;
    }
    if (lang === "javascript") {
      window["eval"](code);
    }
    if (lang === "mermaid") {
      //@ts-ignore
      const mermaidAPI = mermaid.mermaidAPI;
      const id = `graphDiv${Date.now()}`;
      code_el.id = id;
      code_el.style.display = "";
      var graphDefinition = code;
      /** svg源码 */
      code_el.innerHTML = mermaidAPI.render(id, graphDefinition);
      el.insertBefore(code_el, el.firstElementChild);
    }
    if (lang === "typescript") {
      const code_el = el.firstElementChild as any;
      code_el[editorKey].getEditor.then(({ monaco, editor }: any) => {
        monaco.languages.typescript.getTypeScriptWorker().then((work: any) => {
          work(editor.getModel().uri)
            .then((client: any) => client.getEmitOutput(editor.getModel().uri.toString()))
            .then((r: any) => {
              r.outputFiles.map((el: any) => window.eval(el.text));
            });
        });
      });
    }
  }

  /** md 链接的跳转 */ (function () {
    const a = document.querySelectorAll("a[md_to_html]");
    a.forEach((a) => {
      //@ts-ignore
      a.href = a.href.replace(/\.md$/, ".html");
    });
  })();

  /** 公用方法 */

  function time33(str: string) {
    for (var i = 0, len = str.length, hash = 5381; i < len; ++i) {
      hash += (hash << 5) + str.charCodeAt(i);
    }
    return hash & 0x7fffffff;
  }
}
