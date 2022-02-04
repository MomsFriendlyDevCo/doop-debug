/**
* Various debug helpers
*/
const debug = require('debug')('doop:debug');
debug('Init gulp debug');

const gulp = require('gulp');
gulp.task('app.config', 'load:app', ()=> {
	console.dump(app.config);
});
