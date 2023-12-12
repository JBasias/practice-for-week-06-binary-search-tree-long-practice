// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file


// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {

      this.root = null; //new TreeNode(null);
      // Your code here
    }

    insert(val, cN=this.root) {

       if(this.root === null)
       {
          this.root = new TreeNode(val);
          return;
       }

       if(cN.val > val)
       {
        if(cN.left === null)
        {
          cN.left = new TreeNode(val);
        }
        else
        {
           this.insert(val, cN.left);
        }
       }
       else if(cN.val<=val)
       {

        if(cN.right === null)
        {
          cN.right = new TreeNode(val);
        }
        else
        {
           this.insert(val, cN.right);
        }

       }

    }

    search(val) {

        function Is(cN, T)
        {
            if(cN === null) return false;
            else if(cN.val === T) return true;

            return Is(cN.left, T) || Is(cN.right,T);

        }

        return Is(this.root, val)
      // Your code here
    }


    preOrderTraversal(cN = this.root) {

       if(cN ===  null ) return;

       console.log(cN.val);

       this.preOrderTraversal(cN.left);

       this.preOrderTraversal(cN.right);


      // Your code here
    }


    inOrderTraversal(cN = this.root) {


      if(cN ===  null ) return;

      //console.log(cN.val);

      this.inOrderTraversal(cN.left);

      console.log(cN.val);

      this.inOrderTraversal(cN.right);

      // Your code here
    }


    postOrderTraversal(cN = this.root) {


      if(cN ===  null ) return;

      //console.log(cN.val);

      this.postOrderTraversal(cN.left);

      this.postOrderTraversal(cN.right);

      console.log(cN.val);

      // Your code here
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {


      if(this.root === null) return;

      let Q = [];

      Q.push(this.root);

      let cN;

      while(Q.length != 0)
      {

         cN = Q.shift();
         console.log(cN.val);

         if(cN.left != null) Q.push(cN.left);
         if(cN.right != null)  Q.push(cN.right);

      }
      // your code here
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {

       let stack = [];

       function Dpth(cN)
       {
          if(cN === null) return;

          stack.push(cN.val);
          console.log(stack.pop());

          Dpth(cN.right);
          Dpth(cN.left);

       }

       Dpth(this.root);

      // your code here
  }
  }

  module.exports = { BinarySearchTree, TreeNode };


// Your code here
