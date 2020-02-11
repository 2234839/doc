# 关于样式

```bash

# 编译样式的方法 tailwind
npx tailwind build ./_themes/theme.css -o ./_themes/style.css

# 剔除没有在项目中使用的样式 purgecss,除非成品否则没必要用

npx purgecss --css ./_themes/style.css --content **/*.md **/*.html   --out ./_themes/

#压缩 uglify-tool
npx ug ./_themes/style.css ./_themes/style.min.css
```
