import {FrameworkConfiguration} from 'aurelia-framework';
import {TinyMce} from './elements/tiny-mce/tiny-mce';

export function configure(aurelia: FrameworkConfiguration) {

    aurelia.globalResources([
        './elements/tiny-mce/tiny-mce'
    ]);
}
export {TinyMce};