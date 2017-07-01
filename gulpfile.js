
var gulp=require("gulp");
var clean=require("gulp-clean");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var gulpif=require("gulp-if");
var cssnano=require("gulp-cssnano");

var stripDebug=require("gulp-strip-debug");
var stripCssComments=require("gulp-strip-css-comments");
var minify=require("gulp-minify-css");
var flatten=require("gulp-flatten");
var useref=require("gulp-useref");

var path=require("path");

var baseprj="prueba32/";

var pathComponents="src/components/";
var pathFonts="src/font/";
var app_src="app_src/";
var basedist="dist/";
var basebower="bower/";
var basejs="js";
var basecss="css";
var basefonts="fonts";
var templ="templ";
var distfonts="fonts";



var filescss=[
    basedist+basecss+"/font-awesome.css",
    basedist+basecss+"/03layout02.css",
    basedist+basecss+"/03transition02.css",
    basedist+basecss+"/03Menu-vertical01.css",
    basedist+basecss+"/03Menu-vertical-01.css",
    basedist+basecss+"/03menu-horizontal01.css",
    basedist+basecss+"/03list-accordion.css",
    basedist+basecss+"/03List-collections.css",
    basedist+basecss+"/03List-group-buttons.css",
    basedist+basecss+"/04PanelScroll01.css",
    basedist+basecss+"/03buttonmovile01.css",
    basedist+basecss+"/table01.css",
    basedist+basecss+"/03form-login-01.css",
    basedist+basecss+"/03form-fix-login-01.css",
    basedist+basecss+"/03form-basic.css",
    basedist+basecss+"/03search.css",
    basedist+basecss+"/03buttons.css",
    basedist+basecss+"/03form-inputs.css",
    basedist+basecss+"/03rippleEffects01.css",
    basedist+basecss+"/01animationatom.css",
    basedist+basecss+"/04loader-progress-01.css"
];

var filesjs=[
   basedist+basejs+"/es5-shim.js", 
   basedist+basejs+"/jquery.js",
   basedist+basejs+"/polyfiller.js",
   basedist+basejs+"/handlebars.js",
   basedist+basejs+"/hammer.js",
   basedist+basejs+"/director.js",
   basedist+basejs+"/mousetrap.js",
   basedist+basejs+"/fastclick.js",
   basedist+basejs+"/fontfaceobserver.js",
   basedist+basejs+"/hashtable.js",
   basedist+basejs+"/inputmask.js",
   basedist+basejs+"/inputmask.extensions.js",
   basedist+basejs+"/inputmask.dependencyLib.js",
   basedist+basejs+"/inputmask.date.extensions.js",
   basedist+basejs+"/inputmask.numeric.extensions.js",
   basedist+basejs+"/inputmask.phone.extensions.js",
   basedist+basejs+"/inputmask.regex.extensions.js",
   basedist+basejs+"/values.js",
   basedist+basejs+"/util01.js",
   basedist+basejs+"/actions.js",
   basedist+basejs+"/actionsprueba05.js",
   basedist+basejs+"/behaviors.js",
   basedist+basejs+"/behaviors03layout02.js",
   basedist+basejs+"/components01.js",
   basedist+basejs+"/componentsMenuVerticalScroll01.js",
   basedist+basejs+"/viewsComponents.js",
   basedist+basejs+"/viewsComponents03layout02.js",
   basedist+basejs+"/table01.js",
   basedist+basejs+"/prueba07.js"

];

gulp.task("cpFontsAwesome",function(){
   gulp.src(pathFonts+"*.{ttf,woff,woff2,otf,svg,eot}")
   .pipe(gulp.dest(basedist+basefonts));
});
gulp.task("copy-bundle",function(){
    gulp.src("bundle-brify.js")
    .pipe(gulp.dest("dist/minify"))
})
gulp.task("cpJsAppSrc",function(){
    
    gulp.src(app_src+"/*.js")
    .pipe(gulp.dest(basedist+basejs));
    
});

gulp.task("cleanJsAppSrc",function(){
   return gulp.src(basedist+basejs)
   .pipe(clean());
});
gulp.task("cleanMinify",function(){
  return gulp.src(basedist+"minify")
  .pipe(clean());
});

gulp.task("concatJsAppSrc",function(){
   return gulp.src(basedist+basejs+"/*.js")
   .pipe(concat("bundle.js"))
   .pipe(uglify())
   .pipe(gulp.dest(basedist+"minify"));
});

gulp.task("minifyJsAppSrc",function(){
   //return gulp.src(basedist+basejs+"/*.js")
   return gulp.src(filesjs)
   .pipe(concat("bundle.js"))
   .pipe(stripDebug())
   .pipe(gulp.dest(basedist+"minify"))
   .pipe(rename("bundle.min.js"))
   .pipe(uglify())
   .pipe(gulp.dest(basedist+"minify"));
});

gulp.task("cpCss",function(){
   gulp.src(pathComponents+"**/*.css",{cwd:false})
   .pipe(flatten())
   .pipe(gulp.dest(app_src+basecss));
   
});
gulp.task("cpCssAppSrc",function(){
   gulp.src(app_src+basecss+"/*.css")
   .pipe(gulp.dest(basedist+basecss));
});
gulp.task("cleanCss",function(){
    gulp.src(app_src+basecss)
    .pipe(clean());
});
gulp.task("minifyCssAppSrc",function(){
   //gulp.src(basedist+basecss+"/*.css")
  gulp.src(filescss)  
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest(basedist+"minify"))
    .pipe(rename("bundle.min.css"))
    .pipe(minify())
    .pipe(gulp.dest(basedist+"minify"));    
});

gulp.task("useref",function(){
   gulp.src("prueba10.html")
   .pipe(rename(function(path){
       console.log(path);
       path.dirname+="/";
       path.basename+="-bis";
       path.extname=".html";
   }))
   .pipe(useref())
   .pipe(gulpif("*.js",uglify()))
   .pipe(gulpif("*.css",cssnano()))
   .pipe(gulp.dest("./"));

});


