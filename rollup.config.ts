import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

const config = defineConfig([
  // 配置输出ES Module
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.es.js",
      format: "es",
    },
    plugins: [typescript()],
  },
  // // 配置打包类型声明
  // {
  //   input: "src/index.ts",
  //   output: {
  //     file: "dist/index.d.ts",
  //     format: "es",
  //   },
  //   plugins: [dts()],
  // },
]);

export default config;
