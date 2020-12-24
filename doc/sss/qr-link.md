# 将/qr/:id 形式的链接重定向到指定的位置

- pubdate:2019-12-07 10:16:57
- tags:sss,util

---

```html{run .hidden}
<form>
  <div>
    id
    <input name="id" />
  </div>
  <div>
    目标链接
    <input name="target" />
  </div>
  <div>
    密钥
    <input name="pwd" />
  </div>
  <div id="submit" class="bg-gray-700 text-gray-200 w-60 p-5 mx-20 text-center">提交</div>
</form>

<script>
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  document.getElementById("submit").addEventListener("click", function() {
    fetch(
      `https://api.shenzilong.cn/data-link/add_qr_link?target=${document.forms[0].target.value}&qr_no=${document.forms[0].id.value}&pwd=${document.forms[0].pwd.value}`,
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => {
        if (result.includes("write")) {
          alert("设置成功");
        } else {
          alert(result);
        }
      })
      .catch((error) => console.log("error", error));
  });
</script>
```


{: id="20201104153359-4zhmyrj" type="doc"}
