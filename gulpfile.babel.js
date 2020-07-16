import gulp from "gulp";
import del from "del";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";
import ghPages from "gulp-gh-pages";
import image from "gulp-image";
import bro from "gulp-bro";
import babelify from "babelify";

sass.compiler = require("node-sass");

const routes = {
  html: {
    watch: "src/*.html",
    src: "src/*.html",
    dest: "dist",
  },
  css: {
    watch: "src/scss/*.scss",
    src: "src/scss/styles.scss",
    dest: "dist/css",
  },
  images: {
    src: "src/images/*",
    dest: "dist/images",
  },
  js: {
    watch: "src/js/*.js",
    src: "src/js/index.js",
    dest: "dist/js",
  },
};

const html = () => gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: true,
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));

const images = () =>
  gulp.src(routes.images.src).pipe(image()).pipe(gulp.dest(routes.images.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [babelify.configure({ presets: ["@babel/preset-env"] })],
      })
    )
    .pipe(gulp.dest(routes.js.dest));

const ghDeploy = () => gulp.src("dist/**/*").pipe(ghPages());

const watch = () => {
  gulp.watch(routes.html.watch, html);
  gulp.watch(routes.css.watch, styles);
  gulp.watch(routes.js.watch, js);
};

const clean = () => del(["dist", ".publish"]);

const prepare = gulp.series([clean]);
const assets = gulp.series([html, images, styles, js]);
const live = gulp.parallel([watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([ghDeploy, clean]);
