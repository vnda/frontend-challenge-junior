const gulp = require('gulp'),
    { src, dest, series, watch, parallel } = require('gulp'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    fileinclude = require('gulp-file-include'),
    paths = {
        root: './',
        
        // SOURCES 
        html_src: './src/html/pages/*.html',
        js_src: './src/js/*.js',        
        sass_src: './src/sass/main.scss',
        
        min_files: './src/min/',

        // WATCHS
        watch_sass: './src/sass/**/*.scss',
        watch_js: './src/js/*.js',
        watch_html: ['./src/html/components/*.html', './src/html/pages/*.html'],

        // BUILD
        build: {
            src: [
                './*.html', 
                './src/min/*.js', 
                './src/min/*.css',
                './src/assets/*.jpeg',
                './src/assets/*.jpg',
                './src/assets/*.png'
            ],
            dist: './dist/'
        }
    }

// Concatena e Minimiza o javascript 
const Uglifyjs = () => {
    return src(paths.js_src)
        .pipe(concat('index.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({
            basename: 'index',
            suffix: '.min',
        }))
        .pipe(dest(paths.min_files))
        .pipe(browserSync.stream())
}

const Sass = () => {
    return src(paths.sass_src)
        .pipe(sass())
        .pipe(cleanCSS({
            debug: true,
            compatibility: 'ie8',
            level: {
                1: {
                    specialComments: 0,
                },
            },
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(rename({
            basename: 'style',
            suffix: '.min',
        }))
        .pipe(gulp.dest(paths.min_files))
        .pipe(browserSync.stream());
}

const IncludeHTML = () => {
    return gulp.src(paths.html_src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.root));
}

// Static Server + watching scss/html/js files
const BrowserSync = () => {
    browserSync.init({
        server: {
            baseDir: paths.root
        }
    })
    watch(paths.watch_sass, Sass).on('change', browserSync.reload)
    watch(paths.watch_js, Uglifyjs).on('change', browserSync.reload)
    watch(paths.watch_html, IncludeHTML).on('change', browserSync.reload)
}

const Build = () => {
    return src(paths.build.src)
           .pipe(gulp.dest(paths.build.dist))
}

exports.Uglifyjs = Uglifyjs;
exports.Sass = Sass;
exports.BrowserSync = BrowserSync;
exports.IncludeHTML = IncludeHTML;
exports.Build = Build;
exports.default = BrowserSync