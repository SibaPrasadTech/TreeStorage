export const errorEnum = Object.freeze({
    emptyTreeError: {
        code: "EMPTY_TREE",
        msg: "Error: Tree is empty. Please insert a root node to create the tree."
    },
    parentNotFoundError: {
        code: "PARENT_NOT_FOUND",
        msg: "Error: Parent node not found. The specified parent node does not exist in the tree."
    },
    treeAlreadyExists: {
        code: "ROOT_NODE_CONFLICT",
        msg: "Error: Root node conflict. A root node already exists for this tree."
    }
});

export enum ResponseStatusCode {
    success = 200,
    created = 201,
    accepted = 202,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    methodNotAllowed = 405,
    conflict = 409,
    unprocessableEntity = 422,
    internalServerError = 500,
    notImplemented = 501,
    badGateway = 502,
    serviceUnavailable = 503,
    gatewayTimeout = 504
};