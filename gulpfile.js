const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin');

// Tarefa para compilar SCSS em CSS
function styles() {
    return gulp.src("./src/styles/main.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }).on('error', sass.logError))
        .pipe(gulp.dest("./dist/styles"));
}

function images() {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}

function watchFiles() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, styles);
    gulp.watch('./src/images/*', { ignoreInitial: false }, images);
}


const build = gulp.series(styles, images);

exports.default = build;
exports.watch = watchFiles;

