# typeorm

- pubdate: 2019-03-21 15:50:24
- tags : typeorm

---

## 使用 typeorm 之后一直报引入模块的错误

```javascript
(function (exports, require, module, __filename, __dirname) { import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"; ^ SyntaxError: Unexpected token {
```

原因在于他是直接引入的 ts 文件 将 ormconfig.json 里面的那几个引入的配置修改为 js 后缀就好了


{: id="20201104153359-c5rek5r" type="doc"}
