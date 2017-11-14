export class Guid{
    
    private internalGuid:string = '';

    constructor(){
        this.setRandomInternalGuid();
    }

    public toString():string{
        return this.internalGuid;
    }

    public static newGuid():Guid{
        return new Guid();
    }

    private setRandomInternalGuid():void{
        this.internalGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }
}