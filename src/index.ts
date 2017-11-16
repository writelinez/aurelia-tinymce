import {FrameworkConfiguration} from 'aurelia-framework';
import {TinyMce} from './elements/tiny-mce/tiny-mce';
import {ThemeModern} from './core/tinymce-modules/themes/modern/theme-modern';
import {ThemeMobile} from './core/tinymce-modules/themes/mobile/theme-mobile';
import {ThemeInline} from './core/tinymce-modules/themes/inline/theme-inline';

export function configure(aurelia: FrameworkConfiguration) {

    aurelia.globalResources([
        './elements/tiny-mce/tiny-mce'
    ]);

    aurelia.transient(ThemeModern);
    aurelia.transient(ThemeMobile);
    aurelia.transient(ThemeInline);
}
export {TinyMce};