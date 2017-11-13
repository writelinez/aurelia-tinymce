import { customElement, bindable } from "aurelia-framework";
import '../../tinymce/tinymce';
import '../../tinymce/plugins/link/plugin';
import '../../tinymce/plugins/paste/plugin';
import '../../tinymce/plugins/hr/plugin';
import '../../tinymce/plugins/save/plugin';
import '../../tinymce/plugins/textcolor/plugin';

declare var tinymce:any;

@customElement('tiny-mce')
export class TinyMce
{
    @bindable theme:string = 'modern'; //modern, mobile, inline
    @bindable menubar:boolean = true;

    public themeModule:string = '';

    constructor(){
        
    }

    attached(){        
        tinymce.init({
            //convert_urls: false,
            menubar: this.menubar,            
            skin_url: '../../tinymce/tinymce/skins/lightgray',
            selector: '#mce-editor',
            plugins: ['link', 'paste', 'hr', 'save', 'textcolor'],
            setup: (editor:any) => {
                //this.editor = editor;
                editor.on('keyup', () => {
                  //const content = editor.getContent();
                  //this.onEditorKeyup.emit(content);
                  console.log(editor.getContent());
                });
              }
        });
    }

    save(evt:any){
        console.log(evt);
    }
}