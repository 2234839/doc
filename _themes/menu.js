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
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        cb(JSON.parse(this.responseText));
      }
    });
    xhr.open("POST", "/search?q=" + str);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  }
})();