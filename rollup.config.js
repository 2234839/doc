// 读取package.json
import pkg from "./package.json";
import typescript_r from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "typescript";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import uglify from "rollup-plugin-uglify";
// 代码头
const banner = `/*!
* 崮生博客脚本 v${pkg.version}
* (c) 2018-${new Date().getFullYear()} Russell
*/`;
export default {
  input: "./_themes/article.ts",
  plugins: [
    /** 导入css */ postcss({
      extensions: [".css"],
    }),
    /** 导入其他npm包 */ resolve(),
    /** ts支持 */ typescript_r({
      exclude: "node_modules/**",
      typescript: typescript,
    }),
    sourceMaps(),
    // /** 压缩 */ uglify,
  ],
  output: [
    // {
    //   format: "cjs",
    //   file: "./_themes/dist/bundle.cjs.js",
    //   sourcemap: true,
    //   banner,
    // },
    // {
    //   format: "es",
    //   file: "./_themes/dist/bundle.esm.js",
    //   sourcemap: true,
    //   banner,
    // },
    {
      format: "amd",
      dir:"./_themes/dist/",
      sourcemap: true,
      banner,
    },
  ],
};
