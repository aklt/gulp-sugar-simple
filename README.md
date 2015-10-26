# Simple task module for gulp-sugar

```sh
    $ cd project
    npm install gulp gulp-sugar gulp-sugar-tasks --save-dev
    gulp
```

These are some simple default tasks for [gulp-sugar](http://github.com/aklt/gulp-sugar),
including:

<dl>
  <dt>clean</dt>
  <dd>Remove files.  Taks arguments are `{rm: ...}`</dd>
  <dt>copy</dt>
  <dd>Copy Files. Arguments: `{src: ..., dest: ...}`</dd>
  <dt>Preprocess</dt>
  <dd>Prerocess files with [](), `{src: ..., dest: ...}`</dd>
  <dt>shell</dt>
  <dd>Run a shell command. `{args: String}`</dd>
  <dt>serve</dt>
  <dd>Start a server. `{open: Boolean, watch: ..., server: {baseDir: String}}`</dd>
  <dt>watch</dt>
  <dd>Watch files and run tasks. `{actions: [..., targets]}`</dd>
</dl>
