# 使用nico

- pubdate: 2019-03-21 15:50:24
------

# 使用typeorm之后一直报引入模块的错误

```javascript
(function (exports, require, module, __filename, __dirname) { import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"; ^ SyntaxError: Unexpected token {
```

原因在于他是直接引入的ts 文件 将ormconfig.json里面的那几个引入的配置修改为js后缀就好了