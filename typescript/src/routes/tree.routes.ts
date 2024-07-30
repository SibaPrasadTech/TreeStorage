import express from 'express';
let router = express.Router();

import { treeController } from '../controllers';

const treeRoutes = () => {
    router.get('/',treeController.handleFetchTree);
    router.post('/', treeController.handleAddNode);
    return router
};

export default treeRoutes;