const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html", // путь до исходных файлов
        watch: pathSrc + "/html/**/*.html", // маская для отслеживания
        dest: pathDest                      // путь до конечных файлов
    },
    css: {
        src: pathSrc + "/css/*.css", // путь до исходных файлов
        watch: pathSrc + "/css/**/*.css", // маская для отслеживания
        dest: pathDest + "/css"           // путь до конечных файлов
    },
    scss: {
        src: pathSrc + "/sass/*.{sass,scss}", // путь до исходных файлов
        watch: pathSrc + "/sass/**/*.{sass,scss}", // маская для отслеживания
        dest: pathDest + "/css"           // путь до конечных файлов
    },
    js: {
        src: pathSrc + "/js/*.js", // путь до исходных файлов
        watch: pathSrc + "/js/**/*.js", // маская для отслеживания
        dest: pathDest + "/js"           // путь до конечных файлов
    },
    img: {
        src: pathSrc + "/img/*.{png,jpg,JPG,jpeg,gif,svg}", // путь до исходных файлов
        watch: pathSrc + "/img/**/*.{png,jpg,JPG,jpeg,gif,svg}", // маская для отслеживания
        dest: pathDest + "/img"           // путь до конечных файлов
    },
    font: {
        src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}", // путь до исходных файлов
        watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}", // маская для отслеживания
        dest: pathDest + "/fonts"           // путь до конечных файлов
    },
}