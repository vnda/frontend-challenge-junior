"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const htmlmin = require("gulp-htmlmin");
const minify = require("gulp-minify");

sass.compiler = require("node-sass");

function compileSass() {
	return gulp
		.src("src/**/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("dist"));
}

function compileHtml() {
	return gulp
		.src("**/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("dist"));
}

function compileJs() {
	return gulp.src("src/**/*.js").pipe(minify()).pipe(gulp.dest("dist"));
}

function watch() {
	gulp.watch("src/**/*.scss", compileSass);
	gulp.watch("src/**/*.html", compileHtml);
	gulp.watch("src/**/*.js", compileJs);
}

gulp.task("css", compileSass);
gulp.task("html", compileHtml);
gulp.task("js", compileJs);
gulp.task("default", watch);
