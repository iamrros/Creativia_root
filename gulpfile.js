const gulp = require("gulp");
const useref = require('gulp-useref');
const browserSync = require("browser-sync");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


gulp.task("server", function() {
  browserSync({
    server: {
      baseDir: "src"
    }
  });
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function() {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("stylesProd", function() {
  return gulp
      .src("src/sass/**/*.+(scss|sass)")
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(rename({ suffix: ".min", prefix: "" }))
      .pipe(autoprefixer())
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream());
});

gulp.task("scripts", function() {
  return gulp
      .src('src/sass/blocks/**/*.js')
      .pipe(concat('index.js'))
      .pipe(gulp.dest("src/js"))
});

gulp.task("scriptsProd", function() {
  return gulp
      .src('src/sass/blocks/**/*.js')
      .pipe(concat('index.js'))
      .pipe(gulp.dest("dist/js"))
});

gulp.task("scriptsProd", function() {
  return gulp
      .src('src/sass/blocks/**/*.js')
      .pipe(concat('index.js'))
      .pipe(gulp.dest("dist/js"))
});

gulp.task("useref", function () {
  return gulp.src('src/*.html')
      .pipe(useref())
      .pipe(gulp.dest('dist'));
});

gulp.task("watch", function() {
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
  gulp.watch('src/sass/blocks/**/*.js', gulp.parallel('scripts'));
});

exports.imagemin = () => (
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);



gulp.task("default", gulp.parallel("watch", "server", "styles", "scripts"));

gulp.task("prod", gulp.parallel("stylesProd","scriptsProd","useref"));

