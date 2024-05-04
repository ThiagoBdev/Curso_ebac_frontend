const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const javascriptUgly= require("gulp-uglify");

//compila sass

async function compilaSass (){
    const imagemin = await import("gulp-imagemin");
    return gulp.src("./source/styles/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest("./build/styles/"));
}


//compila imagens

function compilaimagem() {  
    return gulp.src("./source/images/*") 
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images")); 
}

//compila javascript


function CompilaJavascript(){
    return gulp.src("./source/scripts/*.js")
        .pipe(javascriptUgly())
        .pipe(gulp.dest("./build/scripts"))
}

exports.imagemin = compilaimagem;
exports.sass = compilaSass;
exports.javascript = CompilaJavascript;



