const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;
sass.compiler = require("node-sass");

const compress = () => {
  return gulp.src("./src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
};

const compileSass = () => {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
};

const watch = () => {
  gulp.watch(["./src/scss/**/*.scss"], compileSass);
  gulp.watch(["./src/js/**/*.js"], compress);
};

module.exports = {
  compileSass,
  compress,
  watch,
};
