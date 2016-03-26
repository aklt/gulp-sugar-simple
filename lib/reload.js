module.exports = function (gulp, conf) {
  var src = conf.src
  if (!src) src = ['gulpfile.coffee']
  if (!Array.isArray(src)) src = [src]

  var spawn = require('child_process').spawn

  var p
  function spawnChildren (e) {
    // kill previous spawned process
    if (p) { p.kill() }

    // `spawn` a child `gulp` process linked to the parent `stdio`
    p = spawn('gulp', [process.argv[2]], {stdio: 'inherit'})
  }

  return function () {
    return gulp.watch(src, spawnChildren)
  }
}
