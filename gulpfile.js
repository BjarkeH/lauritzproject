const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const jade = require("gulp-jade");
const flatten = require("gulp-flatten");
const del = require("del");
//** NOTES **/
// Remember to add lauritz.com to hosts
// path C:\Windows\System32\drivers\etc\hosts
// I.E              127.0.0.1       sporti.one

// Webserver at http://lauritz.com:80
gulp.task("webserver", ()=> {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 80,
    host: "lauritz.com"
  });
});

gulp.task("compile:sass", ()=> {
  return gulp
    .src(["./src/**/*.sass", "./src/**/*.scss"])
    .pipe(sass({
      outputStyle: "expanded"      
    }))
    .pipe(flatten())
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/assets/css/"));
});

gulp.task("vendors", ()=> {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.min.js", "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
      "./node_modules/angular/angular.min.js"
    ])
    .pipe(concat("vendors.js"))
    .pipe(gulp.dest("./dist/assets/vendors/"));
});

gulp.task("copy:html:index", ()=> {
  return gulp
    .src("./src/index.jade")
    .pipe(jade({
      pretty: true // - set to false in production
    }))
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("copy:html", ()=> {
  return gulp
    .src("./src/AngularDirectives/**/*.jade")
    .pipe(jade({
      pretty: true
    }))
    .pipe(flatten())
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/templates/"))
});

gulp.task("scripts", ()=> {
  return gulp
    .src("./src/**/*.js")
    .pipe(concat("app.js"))    
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/assets/scripts/"));
});

gulp.task("watch", ()=> {
  gulp.watch("./src/AngularDirectives/**/*.jade", ["copy:html"]);
  gulp.watch("./src/**/*.js", ["scripts"]);
  gulp.watch("./src/**/*.sass", ["compile:sass"]);
  gulp.watch("./src/index.jade", ["copy:html:index"]);
});

gulp.task("clean:dist", ()=> {
  return del("./dist/*");
})

gulp.task("copy:images", ()=> {
  return gulp
    .src("./src/Images/**/*")
    .pipe(gulp.dest("./dist/assets/images/"))
})

gulp.task("default", ["copy:html:index", "copy:html", "compile:sass", "vendors", "scripts", "webserver", "watch"], ()=> {

})