type jsonTree = {
    [key: string]: {
        label: string;
        children: jsonTree[];
    }
}

export class Tree {
    private static nextIdVal: number = 1;
    id: number;
    content: {
        label: string;
        children: Tree[];
    }
    constructor(id: number, label: string){
        this.id = id;
        this.content = {
            label: label,
            children: []
        }
    }
    findNode(parentId: number):boolean {
        let found = false;
        console.log(this.id);
        if(this.id === parentId) return true;
        for(let subtree of this.content.children){
            console.log(subtree);
            found = found || subtree.findNode(parentId);
            if(found) return found
        }
        return found
    }
    addNode(label: string,parentId: number):boolean {
        let found = false;
        console.log(this.id,parentId);
        //if(this.id === parentId) return true;
        if(this.id === parentId){
            const newNode = new Tree(Tree.nextId(),label);
            this.content.children.push(newNode);
            return true
        }
        for(let childNode of this.content.children){
            found = found || childNode.addNode(label,parentId);
        }
        return found
    }
    static nextId():number {
        return ++Tree.nextIdVal
    }
    printTree(indentation: string = ''): void {
        console.log(`${indentation}${this.content.label}`);
        for (let child of this.content.children) {
            child.printTree(indentation + '  ');
        }
    }
    toJSON(): jsonTree {
        return {
            [`${this.id}`]: {
                label: this.content.label,
                children: this.content.children.map(child => child.toJSON()) // Recursively convert children
            }
        }
    }
}