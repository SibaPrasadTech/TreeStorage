import { Tree } from "./tree.model";

export class SingletonTree{
    static instance: SingletonTree | null = null;
    private tree: Tree;
    private constructor(label: string) {
        this.tree = new Tree(1,label);
    }
    public static getMyTree(label: string): Tree {
        if(!SingletonTree.instance){ 
            SingletonTree.instance = new SingletonTree(label);
            return SingletonTree.instance.tree
        }
        return SingletonTree.instance.tree;
    }
    public static resetTree() {
        SingletonTree.instance = null;
    }
}

let myTree = SingletonTree.getMyTree("Company");
myTree.addNode("CEO",1);
myTree.addNode("CFO",2);
myTree.addNode("CTO",2);
myTree.addNode("Accounting",3);
myTree.addNode("Finance",3);
myTree.addNode("DEV",4);
myTree.addNode("QA",4);
// myTree.addNode("Tech Lead - DEV",7);
// myTree.addNode("Tech Lead - QA",8);
myTree.addNode("SDE - 1",7);
myTree.addNode("SDE - 2",7);
myTree.addNode("SDE - 3",7);
myTree.addNode("SDET - 1",8);
myTree.addNode("SDET - Intern",8);
myTree.printTree();