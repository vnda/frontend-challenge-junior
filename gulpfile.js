'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
sass.compiler = require('node-sass');

gulp.task('default', function() {
  gulp.watch('src/sass/**/*.scss', sassTask);
  gulp.watch('src/scripts/*.js', jsTask);
  gulp.watch('src/scripts/libs/*.js', jsModulesTask);
  gulp.watch('src/*.html', htmlTask);
});

// Html Task
function htmlTask() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
}

// Sass Task
function sassTask() {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/styles'));
}

// Js Task
function jsTask() {
  return gulp.src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/scripts'));
}

// Js_Modules Task
function jsModulesTask() {
  return gulp.src('src/scripts/libs/*.js')
    .pipe(uglify())
    .pipe(concat('js-modules.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/scripts/libs'));
}