const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src("./src/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(gulp.dest("./dist/styles"))
}

function images() {
    return gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
}

function watchFiles() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(styles))
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.parallel(images))
}

exports.default = watchFiles;
