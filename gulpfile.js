const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function ComprimeJavaScript() {
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        // Remova esta linha para evitar a escrita dupla do sourcemap
        //.pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImg() {
    return gulp.src('./source/imagens/*').pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}


exports.default = function () {
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(ComprimeJavaScript));
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/imagens/*', { ignoreInitial: false }, gulp.series(comprimeImg));
}