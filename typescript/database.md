# Database Persistence Strategy

## Strategy 1 : 
### DB Schema
```bash
Table node {
  id integer [primary key]
  label varchar
  parent_id id
}
```

Ref: node.id > node.parent_id
```bash
Query - CREATE TABLE node (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    FOREIGN KEY (parent_id) REFERENCES node(id)
);
```
- **Approach**
    - I will be storing all the nodes of tree in a table called "node". 
    - **Insertion** - Inserting to this table will take place by performing following validation checks on the incoming node
        - If the incoming node is a root node, it should be the first entry to the table and the parent_id of a root node should be null
        - The Incoming node parent should be a valid parent which exists in the node table
    - **Fetching** - Fetching will happen by selecting all rows from the table and sorting them based parent_id and null ASC
        - Once I fetch all the rows, then I will have array of nodes which I will iterate over and add to the tree one by one
        - To optimise this tree reconstruction (forming the json structure from the rows), I can utilise a Map to achieve better time complexity while utilising more memory. 
- **Method**
    - I will introduce arepository layer which will do Database quries. The service layer will call this repository layer.
    - Service layer will have three methods
        - **addNode()**
            - This will perform validation checks
            - call the repository method - insertNode
            ```bash
            Query - INSERT INTO node (label, parent_id) VALUES ('Mammals', parent_id);
            ```
        - **addRoot()**
            - This will perform validation checks
            - call the repository method - insertNode (same as above)
            ```bash
            Query - INSERT INTO node (label, parent_id) VALUES ('Animals', null);
            ```
        - **fetchTree()**
            - This will perform validation checks
            - call the repository method - fetchAll (same as above)
            ```bash
            Query - SELECT * FROM node;
            ```
        - **fetchSubtree**
            - This is not mentioned as a requirement yet, but we have to fetch a subtree based on id, then we have to do a Recursive query using Recursive CTE. By this wat we can avoaid (N+1) queries to the database
            - call the repository method - fetchSubtree(root_id)
            ```bash
            WITH RECURSIVE tree_cte AS (
                -- Anchor member: start with the root node
                SELECT id, label, parent_id
                FROM node
                WHERE id =  <root_id> -- Specify the root id here

                UNION ALL

                -- Recursive member: get all children of the current node
                SELECT n.id, n.label, n.parent_id
                FROM node n
                INNER JOIN tree_cte t ON n.parent_id = t.id
            )
            SELECT * FROM tree_cte;
            ```
    - My controller will call this services to process the request and send responses back. 
    - The existing Tree model and SingletonTree model can be resued for holding the reconstructed tree in memory and also to insert nodes to the tree etc.