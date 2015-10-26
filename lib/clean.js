module.exports = function (gulp, conf) {
    if (!conf.rm) throw new Error("Need conf.rm");
    var rm = conf.rm;
    if (!Array.isArray(rm))
        rm = [rm];

    var del = require('del');
    return function () {
        del(rm);
    };
};
