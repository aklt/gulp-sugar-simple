/*global global, console*/

module.exports = function (gulp, conf) {
    var src = conf.src,
        dest = conf.dest;

    if (!src) throw new Error("Need conf.src");
    if (!dest) throw new Error("Need conf.dest");

    return require('gulp-shell').task([
        'cp -v ' + src + ' ' + dest
    ]);
};
