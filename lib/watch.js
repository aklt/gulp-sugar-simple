module.exports = function (gulp, conf) {
  if (typeof conf !== 'object') {
    throw new Error('to be an object')
  }
  if (!Array.isArray(conf.actions)) {
    throw new Error('Need watch.actions to be an array')
  }

  var cp = require('child_process')

  gulp.task('gulpfile-reload', function () {
    var p

    function spawnChildren (e) {
      // kill previous spawned process
      if (p) {
        p.kill()
      }

      setTimeout(function () {
        p = cp.spawn('gulp', process.argv.slice(2), {stdio: 'inherit'})
      }, 100)
    }

    gulp.watch('gulpfile.js', spawnChildren)
    spawnChildren()
  })

  return function () {
    conf.actions.forEach(function (arg) {
      gulp.watch.apply(gulp, arg)
    })
    return gulp.watch('gulpfile.js', ['gulpfile-reload'])
  }
}
