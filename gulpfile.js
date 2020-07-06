const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require("gulp-sass");

function stylesMethod() {
    return src('./src/scss/*.scss')
        .pipe(sass()).on("error", sass.logError)
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist'));
}

function scriptsMethod() {
    return src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist'));
}

// Optimize Images
function imgMethod() {
    return src("./src/img/*")
      .pipe(imagemin())
      .pipe(dest("./dist/img"));
  }

function watchFiles() {
    watch('./src/scss/*.scss', stylesMethod);
    watch('./src/img/*', imgMethod);
    watch('./src/js/*.js', scriptsMethod);
}

exports.styles = stylesMethod;
exports.scripts = scriptsMethod;
exports.images = imgMethod;
exports.default = watchFiles;