import { Tree } from "../../../src/model/tree.model";

describe("Tree", () => {
  let tree: Tree;
  beforeEach(() => {
    tree = new Tree(1, "Root");
    console.log(Tree.getId());
  });
  it("should create a tree with root node", () => {
    expect(tree.id).toBe(1);
    expect(tree.content.label).toBe("Root");
    expect(tree.content.children).toEqual([]);
    // console.log("Tree ID : ",Tree.getId());
  });

  it("should add a node correctly", () => {
    expect(tree.addNode("Child", 1)).toBe(true);
    expect(tree.content.children.length).toBe(1);
    expect(tree.content.children[0].content.label).toBe("Child");
    // console.log("Tree ID : ",Tree.getId());
  });

  it("should return false if the parent id is not found when adding a node", () => {
    expect(tree.addNode("Child", 999)).toBe(false);
    // console.log("Tree ID : ",Tree.getId());
  });

  it("should convert the tree to JSON correctly", () => {
    tree.addNode("Child", 1);
    tree.addNode("Grandchild", 2);
    const expectedJson = {
      "1": {
        label: "Root",
        children: [
          {
            "2": {
              label: "Child",
              children: [
                {
                  "3": {
                    label: "Grandchild",
                    children: [],
                  },
                },
              ],
            },
          },
        ],
      },
    };
    // console.log(JSON.stringify(tree.toJSON()));
    // console.log(JSON.stringify(expectedJson));
    expect(tree.toJSON()).toEqual(expectedJson);
    // console.log("Tree ID : ",Tree.getId());
  });

  it("should convert the tree to JSON correctly", () => {
    tree.addNode("Child", 1);
    tree.addNode("Grandchild", 2);
    const expectedJson = {
      "1": {
        label: "Root",
        children: [
          {
            "2": {
              label: "Child",
              children: [
                {
                  "3": {
                    label: "Grandchild",
                    children: [],
                  },
                },
              ],
            },
          },
        ],
      },
    };
    // console.log(JSON.stringify(tree.toJSON()));
    // console.log(JSON.stringify(expectedJson));
    expect(tree.toJSON()).toEqual(expectedJson);
    // console.log("Tree ID : ",Tree.getId());
  });

  it("should convert the tree to JSON correctly", () => {
    tree.addNode("Child", 1);
    tree.addNode("Grandchild", 2);
    const expectedJson = {
      "1": {
        label: "Root",
        children: [
          {
            "2": {
              label: "Child",
              children: [
                {
                  "3": {
                    label: "Grandchild",
                    children: [],
                  },
                },
              ],
            },
          },
        ],
      },
    };
    // console.log(JSON.stringify(tree.toJSON()));
    // console.log(JSON.stringify(expectedJson));
    expect(tree.toJSON()).toEqual(expectedJson);
    // console.log("Tree ID : ",Tree.getId());
  });

  it("should convert the tree to JSON correctly", () => {
    tree.addNode("Child", 1);
    tree.addNode("Grandchild", 2);
    const expectedJson = {
      "1": {
        label: "Root",
        children: [
          {
            "2": {
              label: "Child",
              children: [
                {
                  "3": {
                    label: "Grandchild",
                    children: [],
                  },
                },
              ],
            },
          },
        ],
      },
    };
    // console.log(JSON.stringify(tree.toJSON()));
    // console.log(JSON.stringify(expectedJson));
    expect(tree.toJSON()).toEqual(expectedJson);
    console.log(JSON.stringify(tree.toJSON(),null,2));
    // console.log("Tree ID : ",Tree.getId());
  });
  // it("should convert the tree to JSON correctly", () => {
  //   tree.addNode("Child", 1);
  //   tree.addNode("Grandchild", 2);
  //   const expectedJson = [
  //     {
  //       "1": {
  //         label: "company",
  //         children: [
  //           {
  //             "2": {
  //               label: "CEO",
  //               children: [
  //                 {
  //                   "3": {
  //                     label: "CFO",
  //                     children: [
  //                       {
  //                         "5": {
  //                           label: "Accounting",
  //                           children: [],
  //                         },
  //                       },
  //                       {
  //                         "6": {
  //                           label: "Finance",
  //                           children: [],
  //                         },
  //                       },
  //                     ],
  //                   },
  //                 },
  //                 {
  //                   "4": {
  //                     label: "CTO",
  //                     children: [],
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             "7": {
  //               label: "Investor",
  //               children: [],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ];
  //   console.log(JSON.stringify(tree.toJSON()));
  //   console.log(JSON.stringify(expectedJson));
  //   expect(tree.toJSON()).toEqual(expectedJson);
  // });
});
