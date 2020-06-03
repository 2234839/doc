/** 配置mermaid */
// mermaid.initialize({
//   startOnLoad: true,
//   flowchart: {
//     useMaxWidth: true,
//     htmlLabels: true,
//   },
//   theme: "forest",
// });
export function run() {
    /** 高亮代码块 */
    let code_el = document.querySelectorAll(`[class*="lang"]`);
    if (code_el === null)
        throw "未找到code块";
    const code = Array.from(code_el);
    const div_list = code.map(function (el) {
        const div = document.createElement("div");
        el.parentElement.appendChild(div);
        div.style.cssText = `width: 100%;margin-bottom: 10px;`;
        if ("run" in el.attributes) {
            //立即执行代码
            runCode({
                code: el.textContent,
                lang: getLanguage(el),
                el: el.parentElement,
            });
        }
        return [el, div];
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
        monaco) => {
            show_editor.forEach(([el, div]) => {
                el.style.display = "none";
                var editor = monaco.editor.create(div, {
                    value: el.innerText,
                    language: getLanguage(el),
                    minimap: {
                        enabled: false,
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
    }
    /** 获取代码块的所使用的语言 */
    function getLanguage(el) {
        return (el.className.match(/lang-(.*)\b/) || [])[1];
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
    function runCode({ code, lang, el }) {
        console.log(lang, el);
        /** 在这个页面是否是第一次执行 */
        let init = false;
        let code_el;
        const pre = el.previousElementSibling;
        if (pre.classList.contains("run-code")) {
            code_el = pre;
        }
        else {
            //第一次执行,生成存放代码的地方
            init = true;
            code_el = document.createElement("div");
            el.parentElement.insertBefore(code_el, el);
            code_el.classList.add("run-code");
        }
        //针对不同语言进行不同的执行方法
        if (lang === "html") {
            code_el.innerHTML = code;
            if (!init)
                return;
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
            }, 0);
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
            console.log(code_el);
            code_el.style.display = "";
            var graphDefinition = code;
            /** svg源码 */
            code_el.innerHTML = mermaidAPI.render(id, graphDefinition);
            el.insertBefore(code_el, el.firstElementChild);
        }
    }
    /** 导航 */
    (function () {
        "use strict";
        const menu = document.querySelectorAll("h1,h2,h3,h4,h5,h6,h7,h8");
        const container = document.querySelector("#崮生_userjs_导航") || document.createElement("details");
        if (document.querySelector("html").offsetWidth >= 1200)
            container.setAttribute("open", "");
        container.id = "#崮生_userjs_导航";
        container.innerHTML = `<summary>目录</summary>`;
        container.style.cssText = `
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 1rem;
    top: 1rem;
    max-width:30%;
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
    /** md 链接的跳转 */ (function () {
        const a = document.querySelectorAll("a[md_to_html]");
        a.forEach((a) => {
            //@ts-ignore
            a.href = a.href.replace(/\.md$/, ".html");
        });
    })();
    /** 公用方法 */
    function time33(str) {
        for (var i = 0, len = str.length, hash = 5381; i < len; ++i) {
            hash += (hash << 5) + str.charCodeAt(i);
        }
        return hash & 0x7fffffff;
    }
}
