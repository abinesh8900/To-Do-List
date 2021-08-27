//list dependences
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();

//crearte functions

// scss
function compilescss() {
  return src("src/scss/*.scss")
    .pipe(sass())
    .pipe(minify())
    .pipe(dest("dist/css"));
}

// creat watchtask
function jsmin() {
  return src("src/js/*.js").pipe(terser()).pipe(dest("dist/js"));
}

//browserSync
function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browserSyncRelode(cb) {
  browserSync.reload();
  cb();
}

//check  watchtask
function watchTask() {
  watch("*.html", browserSyncRelode);
  watch("src/scss/**/*.scss", series(compilescss, browserSyncRelode));
  watch("src/js/**/*.js", series(jsmin, browserSyncRelode));
}
// default gulp

exports.default = series(compilescss, jsmin, browserSyncServer, watchTask);
