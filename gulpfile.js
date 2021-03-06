var gulp = require("gulp"),
  less = require("gulp-less"),
  connect = require("gulp-connect"),
  pug = require("gulp-pug"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify"),
  sourcemaps = require("gulp-sourcemaps"),
  cached = require("gulp-cached"),
  filter = require("gulp-filter"),
  dependents = require("gulp-dependents"),
  concat = require("gulp-concat"),
  cleanCSS = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer"),
  babel = require("gulp-babel");
function reload(done) {
  connect.server({
    livereload: true,
    port: 3000,
  });
  done();
}

function styles() {
  return gulp
    .src("src/less/**/*.less")
    .pipe(plumber())
    .pipe(cached("less")) // only pass through changed files
    .pipe(dependents())
    .pipe(sourcemaps.init())
    .pipe(filter(["**", "!**/_*.less"]))
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"],
        cascade: false,
      })
    )
    .pipe(
      sourcemaps.write("../maps", {
        includeContent: false,
        sourceRoot: "/src/less",
      })
    )
    .pipe(gulp.dest("assets/css"))
    .pipe(connect.reload());
}

function stylesBuild() {
  return gulp
    .src("src/less/*.less")
    .pipe(plumber())
    .pipe(dependents())
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"],
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("assets/css"));
}

function scripts() {
  return (
    gulp
      .src("src/js/*.js")
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      .pipe(concat("scripts.js"))
      .pipe(
        sourcemaps.write("../maps", {
          includeContent: false,
          sourceRoot: "/src/js",
        })
      )
      .pipe(gulp.dest("assets/js"))
      // .pipe(uglify())
      // .pipe(rename("scripts.min.js"))
      // .pipe(gulp.dest("assets/js"))
      .pipe(connect.reload())
  );
}
function scriptsBuild() {
  return gulp
    .src("src/js/*.js")
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(gulp.dest("assets/js"));
}

function html() {
  return gulp.src("*.html").pipe(plumber()).pipe(connect.reload());
}

function views() {
  return gulp
    .src("src/pug/pages/*.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
        basedir: __dirname + "/src/pug",
      })
    )
    .pipe(gulp.dest("./"))
    .pipe(connect.reload());
}

function watchTask(done) {
  gulp.watch("*.html", html);
  gulp.watch("src/less/**/*.less", styles);
  gulp.watch("src/js/*.js", scripts);
  gulp.watch("src/pug/**/*.pug", views);
  gulp.watch("src/less/**/*.scss", styles).on("change", function (event) {
    console.log("event happened:" + JSON.stringify(event));
    if (event.type === "deleted") {
      //delete from gulp-remember cache
      //emember.forget('less', event.path);
      //delete from gulp-cached cache
      delete cache.caches["less"][event.path];
    }
  });
  done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(stylesBuild, scriptsBuild, views));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;
