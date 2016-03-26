module.exports = function (gulp, conf) {
  var src = conf.src
  var dest = conf.dest
  var context = conf.context || {}

  if (!src) {
    throw new Error('Need conf.src')
  }
  if (typeof dest !== 'string') {
    throw new Error('Need conf.dest to be a string')
  }

  var parts = dest.split(/\//)
  var filename = parts.pop()
  var fileParts = filename.split(/\./)
  var extname = fileParts.pop()
  var basename = fileParts.join('.')
  var pathname = parts.join('/') || './'

  return function () {
    return gulp.src(src)
    .pipe(require('gulp-preprocess')({context: context}))
    .pipe(require('gulp-rename')(function (path) {
      path.basename = basename
      path.suffix = '.preprocess'
      path.extname = '.' + extname
    }))
    .pipe(gulp.dest(pathname))
  }
}
