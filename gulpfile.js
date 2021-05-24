"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("default", watch);

gulp.task("sass", compileSass);

function compileSass() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("./dist/css"));
}

function watch() {
    gulp.watch("src/scss/**/*.scss", compileSass);
}