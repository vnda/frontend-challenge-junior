const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');

const cssPath = 'src/scss/styles.scss';
const jsPath = 'src/js/scripts.js';
const htmlPath = 'src/index.html';


//html task 
function htmlTask() {
    return src('src/*.html', {sourcemaps: true})
    .pipe(dest('dist', {sourcemaps: '.'}));
}
//Sass task
function scssTask() {
    return src(cssPath, {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', {sourcemaps: '.'}));
}

//Javascript task
function jsTask() {
    return src(jsPath, {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('dist', {sourcemaps: '.'}));
}

//Watch task
function watchTask() {
    watch([cssPath, jsPath, htmlPath], {interval: 1000}, parallel(scssTask, jsTask, htmlTask));
}

//Default Gulp task
exports.default = series(
    parallel(
        scssTask,
        jsTask,
        htmlTask
    ),
    watchTask
);





