let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify-es').default;

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('script', function() {
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('scss', function() {
    return gulp.src('app/scss/gallery/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/gallery'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
            index: 'gallery.html'
        }
    });
});

// INDEX
// gulp.task('libs', function() {
//     return gulp.src(['app/js/libs/jquery/jquery-3.5.1.min.js', 
//         'app/js/libs/swiper/swiper-bundle.min.js'])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/index'))
//     .pipe(browserSync.reload({stream: true}))
// });

// gulp.task('js', function() {
//     return gulp.src([
//         'app/js/index/libs.min.js', 
//         'app/js/#main/nav.js',
//         'app/js/#main/swiperHouse.js',
//         'app/js/#main/swiperPenthouse.js',
//         ])
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/index'))
//     .pipe(browserSync.reload({stream: true}))
// });


//GALLERY
gulp.task('libs', function() {
    return gulp.src(['app/js/libs/jquery/jquery-3.5.1.min.js', 
        'app/js/libs/swiper/swiper-bundle.min.js'])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/gallery'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    return gulp.src([
        'app/js/gallery/libs.min.js', 
        'app/js/#main/nav.js',
        'app/js/#main/swiperHouse.js',
        ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/gallery'))
    .pipe(browserSync.reload({stream: true}))
});


// CATALOG
// gulp.task('libs', function() {
//     return gulp.src(['app/js/libs/jquery/jquery-3.5.1.min.js', 
//         'app/js/libs/jquery-range/jquery-ui.min.js',
//         'app/js/libs/jquery-range/jquery.ui.touch-punch.min.js'])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/catalog'))
//     .pipe(browserSync.reload({stream: true}))
// });

// gulp.task('js', function() {
//     return gulp.src([
//         'app/js/catalog/libs.min.js', 
//         'app/js/#main/nav.js', 
//         'app/js/#main/nav.js', 
//         'app/js/#main/range.js',
//         'app/js/#main/choose.js',
//         'app/js/#main/map.js'
//         ])
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/catalog'))
//     .pipe(browserSync.reload({stream: true}))
// });


//ARTICLE
// gulp.task('libs', function() {
//     return gulp.src(['app/js/libs/jquery/jquery-3.5.1.min.js'])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/article'))
//     .pipe(browserSync.reload({stream: true}))
// });

// gulp.task('js', function() {
//     return gulp.src([
//         'app/js/article/libs.min.js', 
//         'app/js/#main/nav.js'
//         ])
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/article'))
//     .pipe(browserSync.reload({stream: true}))
// });


//BARKLI
// gulp.task('libs', function() {
//     return gulp.src([
//         'app/js/libs/jquery/jquery-3.5.1.min.js',
//         'app/js/libs/swiper/swiper-bundle.min.js'
//         ])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/barkli'))
//     .pipe(browserSync.reload({stream: true}))
// });

// gulp.task('js', function() {
//     return gulp.src([
//         'app/js/barkli/libs.min.js', 
//         'app/js/#main/nav.js',
//         'app/js/#main/swiperHouse.js',
//         'app/js/#main/swiperGallery.js',
//         'app/js/#main/orderDots.js',
//         ])
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js/barkli'))
//     .pipe(browserSync.reload({stream: true}))
// });


gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/**/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('scss', 'libs', 'js', 'browserSync', 'watch'));
