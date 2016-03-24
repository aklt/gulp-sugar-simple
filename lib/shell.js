
module.exports = function (gulp, conf) {
    if (!('string' === typeof conf.args || Array.isArray(conf.args)))
        throw new Error("Need conf.args to be array or string");
    var args = typeof conf.args === 'string' ? [conf.args] : conf.args;
    return require('gulp-shell').task(args);
};
