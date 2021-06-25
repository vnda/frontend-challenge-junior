const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat");
const minify = require("gulp-babel-minify");

function watch() {
  gulp.watch("./src/sass/*.scss", compilaSass);
  gulp.watch("./src/js/*.js", compilaJS);
  gulp.watch("./src/*.html", compilaHTML);
}

function compilaSass() {
  return gulp
    .src("./src/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

function compilaJS() {
  return gulp
    .src("./src/js/*.js")
    .pipe(concat('index.min.js'))
    .pipe(
      minify({
        mangle: {
          keepClassName: true,
        },
      })
    )
    .pipe(gulp.dest("./dist/js"));
}

function compilaHTML() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
}

gulp.task('sass', compilaSass)
gulp.task('default', watch)