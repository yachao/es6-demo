import gulp from 'gulp';
import concat from 'gulp-concat';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

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
  	.pipe(sftp(sftpOpt('key', `ftpname/path/${activityName}`)))
  	.pipe(sftp(sftpOpt('key', `ftpname/path/${activityName}`)))
});

gulp.task('default', ['css']);