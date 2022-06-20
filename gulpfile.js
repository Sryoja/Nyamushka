
const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

//Config
const path = require("./config/path.js");
const app = require("./config/app.js");

//tasks
const clear = require("./tasks/clear.js")
const html = require("./tasks/html.js")
const css = require("./tasks/css.js")
const scss = require("./tasks/scss.js")
const js = require("./tasks/js.js")
const img = require("./tasks/img.js")
const font = require("./tasks/font.js")

//Browser Sync
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

//Watcher
const watcher = () => {
    watch (path.html.watch, html).on("all", browserSync.reload);
    // watch (path.css.watch, css).on("all", browserSync.reload);
    watch (path.scss.watch, scss).on("all", browserSync.reload);
    watch (path.js.watch, js).on("all", browserSync.reload);
    watch (path.img.watch, img).on("all", browserSync.reload);
    watch (path.font.watch, font).on("all", browserSync.reload);
}

const build = series(
    clear,
    parallel(html, scss, img, js, font)
);
const dev = series(
    build,
    parallel(watcher, server)
);

//отдельные задачи

exports.html = html;
exports.css = css;
exports.clear = clear;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;

exports.default = app.isProd ? build : dev;