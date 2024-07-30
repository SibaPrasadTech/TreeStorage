import {Request, Response} from "express";
import { SingletonTree } from "../model/singletonTree.model";
import { Tree } from "../model/tree.model";

const handleFetchTree = (req: Request,res: Response) => {
    if(!SingletonTree.instance) return res.send({});
    return res.send(SingletonTree.instance.tree)
}

const handleAddNode = (req: Request,res: Response) => {
    const label = req.body.label;
    const parentId = req.body.parent;
    let myTree:Tree;
    if(!label) return res.status(400).json({error : {
        message: "label can not be empty"
    }});
    if(!parentId) {
        if(SingletonTree.instance) return res.status(409).json({error : {
            message: "Root Node Already Exists"
        }});
        myTree = SingletonTree.getMyTree(label);
        return res.send([myTree]);
    }
    else if(SingletonTree.instance){
        myTree = SingletonTree.instance.tree;
        const inserted = myTree.addNode(label,parentId);
        if(!inserted) {
            res.status(409).json({error : {
                message: "Root Node does not exist. Create the root node first"
            }});;
        }
        return res.send([myTree]);
    }
    else{
        return res.status(409).json({error : {
            message: "Root Node does not exist. Create the root node first"
        }});;
    }
}

export default {
    handleFetchTree,
    handleAddNode
}