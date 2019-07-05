const gulp = require('gulp');
const child = require('child_process');

const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

gulp.task('default', () => {
    console.log("Default gulp task is running!");
})

gulp.task('jekyll', (done) => {
    return child.spawn(jekyll, ['build',
        '--incremental',
        '--drafts'
    ])
    .on('close', done);
})

