var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var pathPrefix = "src/";
var paths = ["header.html", "pages/*.html", "footer.html"];

var pre = "header.html";
var pages = "pages/*.html";

function build() {
    console.log("Building site...");
    paths = paths.map(path => pathPrefix + path);
    return gulp.src(paths)
        .pipe(plumber())
        .pipe(concat("index.html"))
        .pipe(gulp.dest("dist/"));
}

gulp.task('default', function() {
    console.log("Let's build this thing!");
    return build();
});

gulp.task('watch', function() {
    build();
    return watch('src', function () {
        build();
    });
});