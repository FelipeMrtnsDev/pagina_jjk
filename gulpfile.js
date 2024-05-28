const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src("./source/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest("./dist/styles"))
}

function images() {
    return gulp.src("./source/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.parallel(styles))
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.parallel(images))
}
