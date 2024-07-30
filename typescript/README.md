# Application Guide

## How to Run the Application?

### Prerequisites
- **Docker**
- **.env file** with `PORT=<3001>` defined

### Instructions
This repository includes a Dockerfile. Ensure Docker is installed on your system before proceeding.

Run the following Docker commands:

```bash
docker build . -t alien-tree:v1 
docker run -d --env-file .env --expose 3001 -p 3001:3001 alien-tree:v1
```

# Application Guide
### The task requires implementation of the follwoing two APIs,
- Fetch tree - **GET /api/tree**
- Insert node - **POST /api/tree**

# Approach 
- Only one tree exists. No requirement which requires me to have multiple trees (e.g. GET /api/tree/:tree-id). So multiple trees is out of scope. 
- My first thought is that I will represent the Tree through an Object of **class Tree**.
- I will create a singleton class which will take care of initialising my Tree object/instance, so that only one tree exists in the application at any given time.
- Also I will be storing the entire tree in memory. (For persistence the object can be stringified and stored in file and later even in a Database as next step. For now choosing to store it in memory.)
- As per the setup, the insert operation will first find the target node, then insert the new node at that location. So for now it will be a depth first search. Later I can try and optimise it using a map, I guess. 
- Error Validations to be handled :
    - Adding a non-root node to empty tree - First node which is added to the tree should have no parentId
    - Adding a node with unavailable parent_id