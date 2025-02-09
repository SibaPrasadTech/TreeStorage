import { SingletonTree } from '../../../src/model/singletonTree.model';

describe('Tree', () => {
  beforeEach(() => {
    SingletonTree.resetTree();
  })
  it('should create a singleton instance of the tree', () => {
    const tree1 = SingletonTree.getMyTree('Company');
    const tree2 = SingletonTree.getMyTree('Another Company');
    expect(tree1).toBe(tree2);
    expect(tree1.content.label).toBe('Company');
  });
  it('should add nodes to the singleton tree', () => {
    const tree = SingletonTree.getMyTree('Company');
    expect(tree.addNode('CEO', 1)).toBe(true);
    expect(tree.addNode('CFO', 2)).toBe(true);
    expect(tree.addNode('CTO', 2)).toBe(true);
  });
  it('should convert the tree to JSON correctly', () => {
    const tree = SingletonTree.getMyTree('Root');
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