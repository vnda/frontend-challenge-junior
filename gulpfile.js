const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const minifyJs = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
var jsonmin = require('gulp-jsonmin');
const fs = require('fs');
const browserSync = require('browser-sync').create();

//Task de geradora do css para dist/
gulp.task('sass', () => {
    return gulp
    .src(`src/assets/scss/*.scss`)
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(`dist/assets/css/`))
    .pipe(browserSync.stream());
});
// Task que move o js para dist/
gulp.task('js', () => {
    return gulp
    .src(`src/assets/scripts/*.js`)
    .pipe(minifyJs({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js','-debug.js']
    }))
    .pipe(gulp.dest(`dist/assets/scripts/`))
    .pipe(browserSync.stream());
});
gulp.task('json', () => {
    return gulp
    .src(`src/assets/output/*.json`)
    .pipe(jsonmin())
    .pipe(gulp.dest(`dist/assets/output/`))
    .pipe(browserSync.stream());
});
// Task que move o html para dist/
gulp.task('html', async () => {
    return gulp
    .src(`src/pages/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`dist/`))
    .pipe(browserSync.stream());
});
// Task que move as imagens de /assets/img para ./dist/assets/img
gulp.task('img', () => {
    return gulp
    .src(`src/assets/img/**.*`)
    .pipe(gulp.dest('./dist/assets/img/'));
});
// Task de remoção do css
gulp.task('clean:css', () => {
    return del([`dist/assets/css/*.css`]);
});
// Task de remoção do js
gulp.task('clean:js', () => {
    return del([`dist/assets/scripts/*.js`]);
});
// Task de remoção do -debug.js
gulp.task('clean:debugjs', () => {
    return del([`dist/assets/scripts/*-debug.js`]);
});
gulp.task('clean:json', () => {
    return del([`dist/assets/output/*.json`]);
});
// Task de remoção das imagens da pasta '/dist'
gulp.task(
    'clean:img',
    gulp.series(() => {
    return del(['./dist/images/**.*']);
})
);
// Task de remoção do html
gulp.task('clean:html', () => {
    return del(['./dist/*.html']);
});
//Task de visualização no browser
gulp.task('server', () => {
    browserSync.init({
        server: './dist',
    });

    // Monitora as alterações no scss
    gulp.watch(
        `src/assets/scss/*.scss`,
        gulp.series(['clean:css', 'sass'])
    );
    gulp.watch(
        `src/assets/img/**.*`,
        gulp.series(['clean:img', 'img'])
    );
    gulp.watch(
        `src/assets/scripts/*.js`,
        gulp.series(['clean:js', 'js'])
    );
    gulp.watch(
        `src/assets/output/*.json`,
        gulp.series(['clean:json', 'json'])
    );
    gulp.watch(
        `src/pages/*.html`,
        gulp.series(['clean:html', 'html'])
    );

    // Faz a sincronização caso haja qualquer modificação no projeto
    gulp.watch(`src/**/**.*`).on('change', browserSync.reload);
});
// Task default do gulp
gulp.task(
    'default',
    gulp.series(['clean:css','clean:html', 'clean:js','clean:json','clean:img', 'html', 'sass','js','json','img','clean:debugjs','server'])
);

