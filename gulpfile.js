
const { src, dest, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // Adiciona prefixos automaticamente no CSS, como: -webkit-, -moz-, -ms-
const browsersync = require('browser-sync').create(); // Atualiza navegador automaticamente toda vez que algo é modificado no projeto
const cssnano = require('cssnano'); // Minifica CSS
const htmlmin = require('gulp-htmlmin'); // Minifica HTML 
const postcss = require('gulp-postcss'); // "Parseia" CSS com vários plugins de uma única vez (autoprefixer e css são alguns plugins)
const replace = require('gulp-replace'); // Troca strings
const sass = require('gulp-sass')(require('sass')); // Converte SCSS para CSS

// Caminhos para os arquivos SCSS e JS
// O "/**/" garante que eu possa usar quantas pastas quiser dentro de /scss e /js
const files = {
	scssPath: 'src/*.scss',
	htmlPath: 'src/*.html'
}

// Compila SCSS para CSS e roda autoprefixer e minificador
function scssTask() {
	return src(files.scssPath) 
		.pipe(sass())
		.pipe(postcss([require('autoprefixer'), require('cssnano')]))
		.pipe(dest('dist'));
}

// Minifica HTML
function htmlTask() {
	return src(files.htmlPath)
		.pipe(htmlmin({ collapseWhitespace : true}))
		.pipe(dest('dist'));
}


exports.default = series(scssTask, htmlTask);