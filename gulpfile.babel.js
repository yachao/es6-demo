import gulp from 'gulp';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

const reload = browserSync.reload;
const activityName = 'xxx';
const paths = {
	html: ['*.html'],
	css: ['./css/*.css']
};

let sftpOpt = (auth, path) => {
	return {
  		host: '0.0.0.0',
  		auth: auth,
  		remotePath: path
  	}
};

gulp.task('css', () => {
	let date = new Date().getTime();
	gulp.src(paths.css)
		.pipe(concat('app.css'))
		.pipe(replace(/_VERSION_/gi, date))
		.pipe(minifyCss())
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('uploadcss', () => {
  return gulp.src('./dist/css/*')
  	.pipe(sftp(sftpOpt('xxx', `17216004010 ftp (172.16.4.10)/css_40017_cn_train/promote/${activityName}`)))
  	.pipe(sftp(sftpOpt('xxx', `17216004011 ftp (172.16.4.11)/css_40017_cn_train/promote/${activityName}`)))
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['css'], () => {
    // Serve files from the root of this project
    browserSync({
	    notify: false,
	    server: {
	            baseDir: './'
	        },
	    port: 3333
	});

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(paths.css, ['css', reload]);
    gulp.watch(paths.html, reload);
});

gulp.task('default', ['serve']);