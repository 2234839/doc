///@ts-nocheck
/** 搜索功能 */
(() => {
  const input = document.getElementById("search");
  const search_res_list = document.getElementById("search_res_list");
  input.addEventListener("keyup", (e) => {
    // 兼容FF和IE和Opera
    var event = e || window.event;
    var key = event.which || event.keyCode || event.charCode;
    if (key == 13) {
      search(input.value, (res) => {
        console.log(res);
        search_res_list.innerHTML = "";
        res.forEach(({ path }) => {
          const a = document.createElement("a");
          a.href = path;
          a.innerText = path;
          search_res_list.appendChild(a);
        });
      });
    }
  });

  function search(str, cb) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        cb(JSON.parse(this.responseText));
      }
    });
    xhr.open("POST", "/search?q=" + str);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  }
})();

const 负一屏 = document.querySelector(".llej-负一屏");
const 向下图标 = document.querySelector(".llej-向下图标");
向下图标.addEventListener("click", () => {
  document.documentElement.scrollTop = 负一屏.offsetHeight;
});
const old_time = Number(localStorage.getItem("上次访问时间"));
const cur_time = Date.now();
localStorage.setItem("上次访问时间", cur_time);

if (cur_time - old_time < 24 * 60 * 60 * 1000) {
  console.log(111);

  document.documentElement.scrollTop = 负一屏.offsetHeight;
}
