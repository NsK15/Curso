const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')

function tarefasCSS(cb) {

    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' })) // libs.min.css
        .pipe(gulp.dest('./dist/css'))  // pipe é um método de tratamento de dados

}

function tarefasJS() {

    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' })) // libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem() {

    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}


exports.default = gulp.parallel(tarefasCSS, tarefasJS, tarefasImagem)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem