interface Node<T>{
    value:T;
    left: Node<T> | null;
    right: Node<T> | null;
}

export default BinaryTree<T> {
    root: Node<T> | undefined;
    createNode = (value: T) => {
        value,
        left: null,
        right: null
    }

    insert = (value: T){
        
        const newNode = this.createNode(value);        

        if(!root){
            root = newNode;
            return;
        }

        const currentNode = root;

        const traverse = (node: Node<T>) => {
            if(node.value > currentNode.value){
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }

            if(!currentNode){
                currentNode = node;
            } else {
                traverse(node);
            }
        }
        
        traverse(newNode);
    }

    getNearestValue = (nearest: T) => {
        const possibleNode = this.root;
        const diff = Math.abs(nearest.value - possibleNode.value);

        if(diff === 0){
            return root.value;
        }

        if()
    }
}