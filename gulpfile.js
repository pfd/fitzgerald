const gulp = require('gulp');
const child = require('child_process');
const browserSync = require('browser-sync');
const watch = require('gulp-watch');

const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('default', (done) => {
    console.log("Default gulp task is running!");
    done();
})

gulp.task('jekyll', (done) => {
    return child.spawn(jekyll, ['build',
        '--incremental',
        '--drafts'
    ])
    child.exit(1);
})

gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  return child.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});



