const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vuejsfirst/' : '/',

    outputDir: path.resolve(__dirname, "docs"),
    assetsDir: ""
}