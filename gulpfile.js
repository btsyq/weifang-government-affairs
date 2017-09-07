var gulp = require('gulp'),
    gutil = require('gulp-util')
var cssimport = require('gulp-cssimport');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var webpack = require('webpack');
var fileinclude = require('gulp-file-include');
var webpackConfig = require('./webpack.config.js');
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var spriter = require('gulp-css-spriter');






var options = {};
gulp.task("css", function() {
    gulp.src("src/css/*.css")
     	.pipe(plumber())
     	 .pipe(spriter({
            'spriteSheet': 'dist/images/spritesheet.png', 
            'pathToSpriteSheetFromCSS': '../images/spritesheet.png' 
        }))
        .pipe(cssimport(options))
        .pipe(gulp.dest("dist/css"))
       
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({ stream: true }));
});


var myDevConfig = Object.create(webpackConfig);
var devCompiler = webpack(myDevConfig);
//引用webpack对js进行操作
gulp.task("build-js", function(callback) {

    devCompiler.run(function(err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });

});


//用于在html文件中直接include文件
gulp.task('fileinclude', function(done) {
    gulp.src(['src/html/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/html'))
        .on('end', done)
        .pipe(reload({ stream: true }));
});

// 压缩js
gulp.task('jsmin', function(done) {
    gulp.src('dist/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .on('end', done)
        .pipe(reload({ stream: true }));
})

// 监视文件改动并重新载入
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'dist/'
        }
    });

    gulp.watch(['src/**/*.css'], ['css']);
    gulp.watch(['src/**/*.js'], ['build-js']);
    gulp.watch(['src/**/*.html'], ['fileinclude']);
    gulp.watch(['src/**/*.png'], ['png']);
});


gulp.task('default',['serve','build-js','fileinclude','css'])
