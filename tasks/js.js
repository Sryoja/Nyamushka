const {src, dest} = require("gulp");

//Config
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plagins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
// const gulpUglify = require("gulp-uglify");
const webpackStream = require("webpack-stream");


const js = () => {
    return src (path.js.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(e => ({
            title: "JavaScript",
            message: e.message
        }))
    }))
    .pipe(babel())
    .pipe(webpackStream(app.webpack))
    // .pipe(gulpUglify())
    .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
}

module.exports = js;