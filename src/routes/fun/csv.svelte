<script lang="ts">
    import { onMount } from "svelte";
    type table = string[][];
    let fileReader: FileReader;
    let tabel = [[]] as table;
    let 导出 = (t: table) => "";
    onMount(async () => {
        const Papa = await import("papaparse");

        fileReader = new FileReader();
        fileReader.addEventListener("load", (ev) => {
            const text = fileReader.result;
            const json = Papa.parse(text, {});
            tabel = json.data;
        });

        导出 = (t: table) => {
            const resText = Papa.unparse(t, { quotes: true });
            console.log("[resText]", resText);
            const file = new Blob([resText], { type: "text/plain" });
            return URL.createObjectURL(file);
        };
    });
    let files: FileList;
    $: file = files?.[0];
    $: console.log(file);
    $: file ? fileReader.readAsText(file) : void 0;
    // $: coverCode = `tabel=>tabel.map((tr, tr_i) => tr.map((td, td_i) => td))`;
    $: coverCode = 'tabel=> tabel.map((tr, tr_i) => [`<a href="${tr[1]}">${tr[0]}</a>`,tr[2]])';
    $: tabelView = cover(tabel, coverCode);
    $: exportUrl = 导出(tabelView);

    tabel.map((tr, tr_i) => [`[${tr[0]}](${tr[1]})`,tr[2]])

    function cover(t: table, code: string) {
        if (typeof window == "undefined") {
            return t;
        } else {
            try {
                return window?.eval(code)(t) as typeof tabel;
            } catch (e) {
                console.error(e);
                return t;
            }
        }
    }
</script>

<svelte:head>
    <title>csv 在线数据映射工具</title>
</svelte:head>
<h2>csv 转换器</h2>
<input accept=".csv" type="file" bind:files placeholder="请选择 .csv 文件" />

<div>
    转换规则 <textarea bind:value={coverCode} cols="40" rows="10" placeholder="在这里输入 js 代码来控制转换方式" />
</div>
<div>
    左侧是经过转换规则得到的表格，右侧是原始数据 <a download="table.csv" href={exportUrl}>下载转换后的表格</a>
</div>
<div class="flex">
    <tabel class="mr-2">
        {#each tabelView as tr}
            <tr>
                {#each tr as td}
                    <td>{td}</td>
                {/each}
            </tr>
        {/each}
    </tabel>
    <tabel>
        {#each tabel as tr}
            <tr>
                {#each tr as td}
                    <td>{td}</td>
                {/each}
            </tr>
        {/each}
    </tabel>
</div>
