'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
var plumber  = require('gulp-plumber')
var uglify   = require('gulp-uglify')
var concat   = require('gulp-concat')

sass.compiler = require('node-sass')

gulp.task('default', watch)

gulp.task('sass', compileSass)

function compileSass() {
    return gulp
        .src('src/scss/main.scss')
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest('dist/css'))
}

var js_dev   = "dist/js/*.js";

var js_dist = 'dist/js';
var js_dist_name = "scripts.min.js"

gulp.task('scripts', function() {
    return gulp.src(js_dev)
        .pipe(uglify())
        .pipe(concat(js_dist_name))
        .pipe(gulp.dest(js_dist));
});

function watch() {
    gulp.watch('src/scss/*.scss', compileSass)
}
