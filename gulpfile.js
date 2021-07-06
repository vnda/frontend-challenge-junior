const { src, parallel, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const htmlmin = require("gulp-htmlmin");

const compileScss = () =>
  src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("dist"));

const copyHtml = () => src("src/*.html").pipe(dest("dist"));

const compileHtml = () =>
  src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));

const watchDev = () => watch("src/**", parallel(compileScss, compileHtml));

exports.dev = series(parallel(compileScss, copyHtml), watchDev);

exports.build = parallel(compileScss, compileHtml);
