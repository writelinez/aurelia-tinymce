# aurelia TinyMCE
Aurelia TinyMCE HTML Editor Plugin

# Installation
1. npm install aurelia-tinymce --save
2. (aurelia-cli) add package to the dependencies in the aurelia.json file.
```javascript
{
            "name": "aurelia-tinymce",
            "path": "../node_modules/aurelia-tinymce/dist/amd",
            "main": "index",
            "deps": [
              "./tinymce/tinymce"
            ],            
            "resources": [
              "**/*.{css,html}"
            ]
}
```
3. copy `node_modules/aurelia-tinymce/au_gulp_tasks/copy-tinymce-static-resources.ts` to `aurelia_project/tasks`
4. add the new build script to your build.ts file similar to what is shown here:
```javascript
import copytinymcestaticresources from './copy-tinymce-static-resources';
import * as project from '../aurelia.json';

let build = gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    copyFiles,
    copytinymcestaticresources
  ),
  writeBundles
);
```

# Usage

1. add the plugin to your main.ts file.
```javascript
import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-tinymce') //<-- This guy
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
```

2. add the element to the view where you want to editor to go.
```html
<template>
  <h1>My Html Editor</h1>
  <tiny-mce theme="mobile" menubar="false"></tiny-mce>
</template>
```