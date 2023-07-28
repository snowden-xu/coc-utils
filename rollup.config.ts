import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import commonjs from '@rollup/plugin-commonjs';
import clear from 'rollup-plugin-clear';

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
  // 配置打包类型声明
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [commonjs(),dts(),clear({
      targets: ['dist'],
    })],
  },
]);

export default config;
