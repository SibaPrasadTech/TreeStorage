export class RootNodeError extends Error {
    name: string;
    constructor(message: string){
        super(message);
        this.name = "ParentNotFound"
    }
}