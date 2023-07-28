import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import clear from "rollup-plugin-clear";

const config = defineConfig([
  // 配置输出ES Module 和 CommonJS
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        preserveModules: true, // 开启这个选项会将每个模块单独打包，有利于摇树优化
        sourcemap: true,
      },
      // {
      //   dir: "dist/index.cjs.js",
      //   format: "cjs",
      // },
    ],
    plugins: [
      typescript(),
      commonjs(),
      clear({
        targets: ["dist"],
      }),
    ],
  },
  // 配置打包类型声明
  {
    input: "src/index.ts",
    output: {
      dir: "dist/types",
      format: "esm",
      preserveModules: true,
    },
    plugins: [dts()],
  },
]);

export default config;
