const del = require("del");

//Config
const path = require("../config/path.js");

//Clean directory
const clear = () => {
    return del(path.root);
}

module.exports = clear;