//Objective is to see whether two nodes are cousins. Cousins are nodes that are on
//the same level and do not share the same parent

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 6)
tree.addRightNode(tree.root.left, 4)

//Not sure how to denote x and y yet... please let me know if you have suggestions


//O(n) solution that uses BFS to traverse each node and annotate each parrent

let queue = [{node: tree.root, parent: null, level: 0}]
let cousin1 = null
let cousin2 = null

while (queue.length > 0) {
    let curr = queue.shift()
    
    if (curr.node.val == x) {
        cousin1 = {parent: curr.parent, level: curr.level}
    }
    
    if (curr.node.val == y) {
        cousin2 = {parent: curr.parent, level: curr.level}
    }
    
    if (curr.node.left) {
        queue.push({node: curr.node.left, parent: curr.node.val, level: curr.level + 1})
    }
    
    if (curr.node.right) {
        queue.push({node: curr.node.right, parent: curr.node.val, level: curr.level + 1})
    }
}

if (cousin1.level != cousin2.level || cousin1.parent == cousin2.parent) {
    return false
}

return true