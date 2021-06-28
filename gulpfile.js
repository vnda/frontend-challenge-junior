const gulp = require('gulp');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


//Copia TODOS OS HTML
gulp.task('copyHtml', async () =>{
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});


//Copia TODAS AS FONTES
gulp.task('copyFonts', async () =>{
  gulp.src('src/fonts/**/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('dist/fonts'));
});

//Scripts
gulp.task('scripts', async()=> {
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
});

//Compila SASS
gulp.task('sass', async()=> {
  gulp.src('src/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('default', gulp.parallel(['copyHtml', 'scripts', 'sass', 'copyFonts']));

gulp.task('watch', async()=>{
  gulp.watch('src/*.html', gulp.series('copyHtml'));
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch('src/sass/*.scss', gulp.series('sass'));
  gulp.watch('src/fonts/**/*.{ttf,woff,eof,svg}', gulp.series('copyFonts'));
});