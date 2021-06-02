"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('default', function () {
  gulp
    .src("./src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css/"));
});


