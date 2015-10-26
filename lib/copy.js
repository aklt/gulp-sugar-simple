/*global global, console*/

var gulpShell = require('gulp-shell');

module.exports = function (gulp, conf) {
    var src = conf.src,
        dest = conf.dest;

    if (!src) throw new Error("Need conf.src");
    if (!dest) throw new Error("Need conf.dest");

    return gulpShell.task([
        'cp -v ' + src + ' ' + dest
    ]);
};
