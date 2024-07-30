import { Application } from "express";
import treeRoutes from "./tree.routes";

const routes = (app: Application) => {
    const apiIdentifier = `/api`;
    app.use(`${apiIdentifier}/tree`, treeRoutes());
}

export default routes