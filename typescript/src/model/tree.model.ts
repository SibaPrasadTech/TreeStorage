type jsonTree = {
    [key: string]: {
        label: string;
        children: jsonTree[];
    }
}

export class Tree {
    private static nextIdVal: number;
    id: number;
    content: {
        label: string;
        children: Tree[];
    }
    constructor(id: number, label: string){
        this.id = id;
        Tree.nextIdVal = id;
        this.content = {
            label: label,
            children: []
        }
    }
    addNode(label: string,parentId: number):boolean {
        let found = false;
        if(this.id === parentId){
            const newNode = new Tree(this.nextId(),label);
            this.content.children.push(newNode);
            return true
        }
        for(let childNode of this.content.children){
            found = found || childNode.addNode(label,parentId);
        }
        return found
    }
    nextId():number {
        return ++Tree.nextIdVal
    }
    static getId():number {
        return Tree.nextIdVal;
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