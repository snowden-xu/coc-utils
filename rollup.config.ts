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
        dir: "dist", // 输出目录
        format: "esm", // 输出格式
        preserveModules: true, // 保留目录结构
        compact: true, // 压缩代码
        // sourcemap: true,  // 生成sourcemap文件
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
