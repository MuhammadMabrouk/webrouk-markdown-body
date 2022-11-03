const { dest, watch } = require("gulp");

// gulp plugins
const rollup = require("@rollup/stream");
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const terser = require("gulp-terser");
const connect = require("gulp-connect");

// script task
const cache = {};
const script = () => {
  return rollup({
    input: "src/index.js",
    plugins: [commonjs(), nodeResolve(), babel({ babelHelpers: "bundled" })],
    cache,
    output: { format: "iife" },
  })
    .on("bundle", function (bundle, name) {
      // Update cache data after every bundle is created
      cache[name] = bundle;
    })
    .pipe(source("webrouk-markdown-body.js"))
    .pipe(buffer())
    .pipe(terser())
    .pipe(dest("dist"))
    .pipe(connect.reload());
};

// watcher task
const watcher = (cb) => {
  connect.server({
    root: "./dist/",
    livereload: true,
  });

  // script task
  watch("src/index.js", script);

  cb();
};

module.exports = {
  script,
  default: watcher,
};
