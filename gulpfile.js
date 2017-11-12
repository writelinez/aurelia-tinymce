var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("copy:html", function() {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task("copy:css", function() {
  return gulp.src("src/**/*.css")
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task("copy:json", function() {
  return gulp.src("src/**/*.json")
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task("sass", function() {
  return gulp.src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task('tinymce:src', function(){
  return gulp.src("node_modules/tinymce/**")
    .pipe(gulp.dest("dist/amd/tinymce"))
    .pipe(gulp.dest("dist/commonjs/tinymce"))
    .pipe(gulp.dest("dist/es2015/tinymce"))
    .pipe(gulp.dest("dist/native-modules/tinymce"))
    .pipe(gulp.dest("dist/system/tinymce"));
})

//gulp.task("copyToTestProject", function(){
//  return gulp.src("**/*", {base: '.'})
//    .pipe(gulp.dest("../aurelia-test-project/node_modules/aurelia-tinymce"));
//});

//gulp.task("default", ["copy:html", "copy:css", "copy:json", "sass", "tinymce:src", "copyToTestProject"]);
gulp.task("default", ["copy:html", "copy:css", "copy:json", "sass", "tinymce:src"], function(){
  return gulp.src("**/*", {base: '.'})
  .pipe(gulp.dest("../aurelia-test-project/node_modules/aurelia-tinymce"));
});
