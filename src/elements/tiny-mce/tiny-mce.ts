import { customElement } from "aurelia-framework";
import '../../tinymce/tinymce';
import '../../tinymce/themes/modern/theme'

declare var tinymce:any;

@customElement('tiny-mce')
export class TinyMce
{
    constructor(){
        
    }

    attached(){

        tinymce.init({
            //convert_urls: false,            
            skin_url: '../../tinymce/tinymce/skins/lightgray',
            selector: '#mce-editor'
            //plugins: ['link', 'paste', 'table']
        });
    }
}