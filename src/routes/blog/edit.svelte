<script>
  import { onMount } from "svelte";
  import "codemirror/lib/codemirror.css"; // Editor's Dependency Style
  import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
  let pagePath = "/record/git.html";
  let article = {};
  let editor = undefined;
  onMount(async () => {
    import("@toast-ui/editor").then((Editor) => {
      editor = new Editor.default({
        el: document.querySelector(".llej-editor"),
        height: "100vh",
        initialEditType: "markdown",
        previewStyle: "tab",
        usageStatistics: false,
      });
      let old = undefined;
      setInterval(() => {
        if (old !== article) {
          editor.setMarkdown(article.md);
          old = article;
        }
      }, 25);
    });
    // import("../../_themes/article.ts").then((r) => {
    // });
  });
  function getArticle(params) {
    fetch(`/article.json?path=${pagePath.replace(/\.html/, ".md")}?requester=sapper`).then(async (r) => {
      const a = await r.json();
      article = a;
    });
  }
  function preview() {
    const md = editor.getMarkdown();
    fetch(`/article.json?path=${pagePath.replace(/\.html/, ".md")}?requester=sapper`, {
      method: "POST",
      body: JSON.stringify({ isPreview: true, md }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (r) => {
      const a = await r.json();
      article = { ...a, md };
    });
  }
  function update() {
    const md = editor.getMarkdown();
    fetch(`/article/update?path=${pagePath.replace(/\.html/, ".md")}?requester=sapper`, {
      method: "POST",
      body: JSON.stringify({ md }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (r) => {
      const a = await r.json();
      console.log("r", a);
    });
  }
</script>

<style>
  input {
    border: 1px solid #000;
  }
</style>

<svelte:head>
  <title>博客编辑页 - 崮生</title>
</svelte:head>
<input type="text" placeholder="页面地址" bind:value={pagePath} />
<button class="btn" on:click={() => getArticle()}>获取</button>
<button class="btn" on:click={() => preview()}>预览</button>
<button class="btn" on:click={() => update()}>更新</button>
<div class="pt-3">
  <!-- <textarea bind:value={article.md} name="" id="" cols="30" rows="10" /> -->
  <div class="llej-editor" />
</div>
<div>
  <h2>预览</h2>
  {@html article.html}
</div>
