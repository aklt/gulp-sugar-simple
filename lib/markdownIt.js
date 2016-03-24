module.exports = function (gulp, conf) {
    if (!conf.src) throw new Error("Need conf.src");
    if (!conf.dest) throw new Error("Need conf.dest");

    var markdownIt = require('gulp-markdown-it');

    return function () {
        return gulp.src(conf.src)
            .pipe(markdownIt({                   
              html: true,
              xhtmlOut: true,
              breaks: false,
              linkify: true,
              plugins: ['markdown-it-deflist']
            }))
            .pipe(gulp.dest(conf.dest));
    };
};
