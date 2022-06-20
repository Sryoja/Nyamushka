const {src, dest} = require("gulp");

//Config
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plagins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html");

const html = () => {
    return src (path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(e => ({
            title: "HTML",
            message: e.message
        }))
    }))
    .pipe(fileinclude())
    // .pipe(webpHtml())
    .pipe(htmlmin(app.htmlmin))
    .pipe(dest(path.html.dest))
}

module.exports = html;