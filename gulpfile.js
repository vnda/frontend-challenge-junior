'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');

sass.compiler = require('node-sass');

function compilaSass(){
  return gulp
    .src("src/styles/*.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("dist/styles"));
}

function compilaHtml() {
  return gulp
  .src("src/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist'));
};

function compilaJs() {
  return gulp
  .src("src/scripts/*.js")
  .pipe(minify())
  .pipe(gulp.dest('dist/scripts'));
};

function watch(){
  gulp.watch("src/styles/*.scss", compilaSass);
  gulp.watch("src/*.html", compilaHtml);
  gulp.watch("src/scripts/*.js", compilaJs)
}

gulp.task('css', compilaSass);
gulp.task('html', compilaHtml); 
gulp.task('js', compilaJs); 
gulp.task('default', watch);
