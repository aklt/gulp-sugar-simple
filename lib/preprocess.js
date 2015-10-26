var gulpPreprocess = require('gulp-preprocess'),
    gulpRename = require('gulp-rename');

module.exports = function (gulp, conf) {
    var src = conf.src,
        dest = conf.dest,
        context = conf.context || {};

    if (!src) throw new Error("Need conf.src");
    if ('string' !== typeof dest) throw new Error("Need conf.dest to be a string");

    var parts     = dest.split(/\//),
        filename  = parts.pop(),
        fileParts = filename.split(/\./),
        extname   = fileParts.pop(),
        basename  = fileParts.join('.'),
        pathname  = parts.join('/') || './';

    return function () {
       return gulp.src(src)
            .pipe(gulpPreprocess({context: context}))
            .pipe(gulpRename(function (path) {
                path.basename = basename;
                path.suffix = '.preprocess';
                path.extname = '.' + extname;
            }))
            .pipe(gulp.dest(pathname));
    };
};
