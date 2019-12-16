# flexsearch 搜索引擎的试用

- pubdate:2019-12-13 15:27:56
- tags:文本处理,flexsearch

---

[flexsearch github](https://github.com/nextapps-de/flexsearch/)

```html{run}
<script src=""></script>
<script>
  require.config({
    paths: {
      flexsearch:
        "https://cdn.jsdelivr.net/gh/nextapps-de/flexsearch@master/dist/flexsearch.min.js",
    },
  });
  require(["flexsearch"], function(FlexSearch) {
    var index = FlexSearch.create();
    index.add(10025, "John Doe");
    index.add(10001, "John Doe 新七天");
    index.search("John", function(result) {
      console.log("搜索结果", result);
    });
  });
</script>
```
