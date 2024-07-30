import { Tree } from '../../../src/model/tree.model';

describe('Tree', () => {
  let tree:Tree;
  beforeEach(() => {
    tree = new Tree(1,'Root');
  })
  it('should create a tree with root node', () => {
    expect(tree.id).toBe(1);
    expect(tree.content.label).toBe('Root');
    expect(tree.content.children).toEqual([]);
  });

  it('should add a node correctly', () => {
    expect(tree.addNode('Child', 1)).toBe(true);
    expect(tree.content.children.length).toBe(1);
    expect(tree.content.children[0].content.label).toBe('Child');
  });

  it('should return false if the parent id is not found when adding a node', () => {
    expect(tree.addNode('Child', 999)).toBe(false);
  });

  it('should convert the tree to JSON correctly', () => {
    tree.addNode('Child', 1);
    tree.addNode('Grandchild', 2);
    const expectedJson = {
      '1': {
        label: 'Root',
        children: [
          {
            '2': {
              label: 'Child',
              children: [
                {
                  '3': {
                    label: 'Grandchild',
                    children: [],
                  },
                },
              ],
            },
          },
        ],
      },
    };
    console.log(JSON.stringify(tree.toJSON()));
    console.log(JSON.stringify(expectedJson));
    expect(tree.toJSON()).toEqual(expectedJson);
  });
});