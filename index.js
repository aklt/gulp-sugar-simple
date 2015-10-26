var fs = require('fs'),
    lib = __dirname + '/lib';

fs.readdirSync(lib).forEach(function (file) {
    var m = /^(.+)\.js$/.exec(file);
    if (m) {
        module.exports[m[1]] = require(lib + '/' + file);
    }
});
