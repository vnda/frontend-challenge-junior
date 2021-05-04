const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

function minJs(cb) {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist/js'))

}

function minCSS() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer([
            'last 15 versions',
            '> 1%',
            'ie 8',
            'ie 7']))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('dist/css'))
}

function watchCSS() {
    gulp.watch('src/scss/*.scss', minCSS);
}

function watchJS() {
    gulp.watch('src/js/*.js', minJs);
}

exports.default = parallel(watchCSS, watchJS);