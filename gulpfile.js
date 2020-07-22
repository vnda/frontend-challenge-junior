"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

sass.compiler = require("node-sass");

gulp.task("default", watch);

gulp.task("sass", compilaSass);

gulp.task("js", compilaJS);

function compilaJS() {
  return gulp
    .src("./src/js/*.js")
    .pipe(uglify())
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("./dist/scripts"));
}

function compilaSass() {
  return gulp
    .src("./src/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

function watch() {
  gulp.watch("./src/sass/*.scss", compilaSass);
  gulp.watch("./src/js/*.js", compilaJS);
}
