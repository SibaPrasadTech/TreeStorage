import { CustomTreeError } from "../custom_error";
import {errorEnum} from "../custom_error/error.enum";
import { SingletonTree } from "../model/singletonTree.model";
import { Tree } from "../model/tree.model";

export class TreeService {
    static getTree(): Tree | {} {
        if(SingletonTree.instance) return SingletonTree.instance.tree
        throw new CustomTreeError(errorEnum.emptyTreeError)
    }
    static addRootNode(label: string): Tree {
        if(SingletonTree.instance) throw new CustomTreeError(errorEnum.treeAlreadyExists)
        return SingletonTree.getMyTree(label);
    }
    static addChildNode(label: string, parentId: number): Tree {
        if(!SingletonTree.instance) throw new CustomTreeError(errorEnum.emptyTreeError)
        const myTree = SingletonTree.instance.tree;
        const isInserted = myTree.addNode(label,parentId);
        if(isInserted){
            return myTree
        }
        else{
            throw new CustomTreeError(errorEnum.parentNotFoundError)
        }
    }
}