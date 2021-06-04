const gulp = require('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass')

function compileSass() {
  return gulp
    .src('src/sass/main.scss')
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest('dist/css'))
}

function compileJs(cb) {
  return gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/js'))
}

function watchCss() {
  gulp.watch('src/sass/*.scss', compileSass)
}
function watchJs() {
  gulp.watch('src/js/*.js', compileJs)
}

exports.default = parallel(watchCss, watchJs);