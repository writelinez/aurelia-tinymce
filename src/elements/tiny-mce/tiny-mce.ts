import { customElement, bindable, inject } from "aurelia-framework";
import {Guid} from '../../core/utilities/guid';
import '../../tinymce/tinymce';
import '../../tinymce/plugins/link/plugin';
import '../../tinymce/plugins/paste/plugin';
import '../../tinymce/plugins/hr/plugin';
import '../../tinymce/plugins/save/plugin';
import '../../tinymce/plugins/textcolor/plugin';
import { setTimeout } from "timers";

declare var tinymce:any;

@customElement('tiny-mce')
@inject(Element)
export class TinyMce
{
    @bindable theme:string = 'modern'; //modern, mobile, inline
    @bindable menubar:boolean = true;
    @bindable content:string = '';

    private element:Element;

    private editorId:string = '';
    private editorInstance:any = null;
    private attachCount:number;

    constructor(element){
        this.element = element;
    }

    bind(){
        this.setEditorId();
        this.attachCount = 0;
    }

    attached(){
        window.setTimeout(() => {
            let el = document.getElementById(this.editorId) as any;
            if(!el && this.attachCount < 100){
                this.attached();
                this.attachCount += 1;
                return;
            }
            el.removeAttribute('style');
            el.removeAttribute('aria-hidden')

            tinymce.init({
                //convert_urls: false,
                menubar: this.menubar,            
                skin_url: '../../tinymce/tinymce/skins/lightgray',
                selector: `#${this.editorId}`,
                plugins: ['link', 'paste', 'hr', 'save', 'textcolor']
            });
    
            this.editorInstance = tinymce.editors[this.editorId];
            if(this.editorInstance){
                this.editorInstance.setContent(this.content);
            }    
        }, 10);           
    }

    detached(){
        if(this.editorInstance){
            this.editorInstance.destroy();            
        }
    }

    save(){
        
        let e = new CustomEvent('save', {
            detail: {
                editorContent: this.editorInstance.getContent()
            },
            bubbles: true
        });
        this.element.dispatchEvent(e);        
    }

    private setEditorId(){
        let guid = Guid.newGuid();
        let id = `editor-${guid.toString()}`;
        this.editorId = id;
    }
}