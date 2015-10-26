/*global setTimeout*/

module.exports = function (gulp, conf) {
    var cp = require('child_process');

    if ('object' !== typeof conf) throw new Error('to be an object');
    if (!Array.isArray(conf.actions)) throw new Error("Need watch.actions to be an array");
    
    gulp.task('gulpfile-reload', function() {
        var p;
    
        function spawnChildren(e) {
            // kill previous spawned process
            if(p) { p.kill(); }
    
            // `spawn` a child `gulp` process linked to the parent `stdio`
            setTimeout(function () {
                p = cp.spawn('gulp', process.argv.slice(2), {stdio: 'inherit'});
            }, 100);
        }
    
        gulp.watch('gulpfile.js', spawnChildren);
        spawnChildren();
    });
    
    return function () {
        conf.actions.forEach(function (arg) {
            gulp.watch.apply(gulp, arg);
        });
        return gulp.watch('gulpfile.js', ['gulpfile-reload']);
    };
};
