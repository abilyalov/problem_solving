function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}