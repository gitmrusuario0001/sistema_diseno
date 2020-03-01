var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat= require('gulp-concat');

//npm i gulp 
gulp.task('hello',function(){
    console.log('Hello !!!!!');
})

gulp.task('sass',function(){
    console.log('sass proc');
    return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('style_min',function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass()) //Converts Sass to CSS with gulp-sass 
        .pipe(minifyCSS())
        .pipe(concat('style_main.min.css'))
        .pipe(gulp.dest('public/stylesheets'))
})

//gulp watch

// gulp.task('watch',['style_min'],function(){
//    gulp.watch('scss/**/*.scss',['style_min']);
// })

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});
