import {Request, Response} from "express";
import { SingletonTree } from "../model/singletonTree.model";
import { Tree } from "../model/tree.model";
import { ValidationError } from "../custom_error";
import { TreeService } from "../service/tree.service";
import { CustomTreeError } from "../custom_error";
import { ResponseStatusCode } from "../custom_error/error.enum";

const handleFetchTree = (req: Request,res: Response) => {
    if(!SingletonTree.instance) return res.send({});
    return res.send(SingletonTree.instance.tree)
}

const handleAddNode = (req: Request,res: Response) => {
    const label = req.body.label;
    const parentId = req.body.parent;
    
    if(!label) throw new ValidationError(`Label can not be empty`);
    try{
        let tree: Tree;
        if(!parentId) {
            tree = TreeService.addRootNode(label);
            return res.send(tree);
        }
        tree = TreeService.addChildNode(label,parentId);
        return res.send(tree);
    }
    catch(err){
        if (err instanceof CustomTreeError){
            return res.status(ResponseStatusCode.conflict).send({
                error: err.message
            })
        }
        throw err
    }
    // if(!parentId) {
    //     if(SingletonTree.instance) return res.status(409).json({error : {
    //         message: "Root Node Already Exists"
    //     }});
    //     myTree = SingletonTree.getMyTree(label);
    //     return res.send([myTree]);
    // }
    // else if(SingletonTree.instance){
    //     myTree = SingletonTree.instance.tree;
    //     const inserted = myTree.addNode(label,parentId);
    //     if(!inserted) {
    //         res.status(409).json({error : {
    //             message: "Root Node does not exist. Create the root node first"
    //         }});;
    //     }
    //     return res.send([myTree]);
    // }
    // else{
    //     return res.status(409).json({error : {
    //         message: "Root Node does not exist. Create the root node first"
    //     }});;
    // }
}

export default {
    handleFetchTree,
    handleAddNode
}