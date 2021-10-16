import resolve from "@rollup/plugin-node-resolve";
import swc from "rollup-plugin-swc";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.ts",
  output: {
    dir: "out",
    format: "system",
  },
  preserveEntrySignatures: false,
  plugins: [
    del({ targets: "out/*" }),
    resolve({
      extensions: [".ts"],
    }),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
        },
        target: "es2018",
      },
    }),
  ],
};
