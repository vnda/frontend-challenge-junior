"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const htmlmin = require("gulp-htmlmin");
const minify = require("gulp-minify");

sass.compiler = require("node-sass");

function compileSass() {
	return gulp
		.src("src/styles/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("dist/styles"));
}

function compileHtml() {
	return gulp
		.src("public/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("dist/public"));
}

function compileJs() {
	return gulp
		.src("src/scripts/*.js")
		.pipe(minify())
		.pipe(gulp.dest("dist/scripts"));
}

function watch() {
	gulp.watch("src/styles/*.scss", compileSass);
	gulp.watch("public/*.html", compileHtml);
	gulp.watch("src/scripts/*.js", compileJs);
}

// gulp.task("css", compileSass);
// gulp.task("html", compileHtml);
// gulp.task("js", compileJs);
gulp.task("default", watch);

// exports.default = watch();
