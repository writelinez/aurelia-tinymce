import * as gulp from 'gulp';
import * as project from '../aurelia.json';

let project_path = project.platform.baseDir;
let node_modules_directory = `${project_path}/node_modules`;
let tinymce_directory = `${node_modules_directory}/aurelia-tinymce/dist/amd/tinymce`;

function copyTinyMCEFonts(){    
    return gulp.src(`${tinymce_directory}/skins/lightgray/fonts/**/*.*`)
        .pipe(gulp.dest(`${project.platform.baseDir}/fonts`))
}

function copyTinyMCEImages(){
    return gulp.src(`${tinymce_directory}/skins/lightgray/img/**/*.*`)
        .pipe(gulp.dest(`${project.platform.baseDir}/img`))
}

export default gulp.series(
    copyTinyMCEFonts,
    copyTinyMCEImages
  );