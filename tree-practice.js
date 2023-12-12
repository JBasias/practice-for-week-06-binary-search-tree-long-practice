const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rN) {


  if(rN.left === null) return rN.val;

  return findMinBST(rN.left);


  // Your code here
}

function findMaxBST (rN) {

  if(rN.right === null) return rN.val;

  return findMaxBST(rN.right);
  // Your code here
}

function findMinBT (rN) {

  let ret = rN.val;

  if(rN.left!=null) ret = Math.min(ret, findMinBT(rN.left));

  if(rN.right!=null) ret = Math.min(ret, findMinBT(rN.right));

  return ret;

  // Your code here
}

function findMaxBT (rN) {

  let ret = rN.val;

  if(rN.left!=null) ret = Math.max(ret, findMaxBT(rN.left));

  if(rN.right!=null) ret = Math.max(ret, findMaxBT(rN.right));

  return ret;

  // Your code here
}

function getHeight (rN) {

  if(rN === null) return -1;

  function gH(rN)
  {
     if(rN === null) return 0;
     return Math.max(gH(rN.left), gH(rN.right)) + 1;
  }

  return gH(rN) -1

  // Your code here
}

function balancedTree (rN) {


   if(rN === null ) return true;

   function GetB(rN)
   {
      if(rN === null) return true;

      if(Math.abs(getHeight(rN.left)-getHeight(rN.right))>1) return false;

      return GetB(rN.left) && GetB(rN.right);
   }

   return GetB(rN);

  // Your code here
}


function countNodes(rN) {
  if (rN === null) return 0;

  // Count the root node first, then count nodes in left and right subtrees.
  return 1 + countNodes(rN.left) + countNodes(rN.right);
}

/*
function countNodes (rN) {

  if(rN === null) return 0;

  return 1 + countNodes(rN.right) + countNodes(rN.left);
  // Your code here
}*/

function getParentNode (rN, T) {

  if(rN.val === T) return null;

  let ret = undefined;

  function Get(rN)
  {

    if(ret != undefined) return;

    if(rN === null) return;

    if(rN.left != null)
    {
      if(rN.left.val === T)
      {
        ret = rN;
        return;
      }
    }

    if(rN.right!=null)
    {
      if(rN.right.val ===T)
      {
          ret =rN;
          return;
      }

    }

    Get(rN.left);
    Get(rN.right);
  }

  Get(rN);

  //if(ret === null) return undefined;

  return ret;

  // Your code here
}

function inOrderPredecessor (rN, T) {

  let ret = null;

  //if(rN.val === T) return null;

  function GetIn(rN, T)
  {
    if(rN === null) return;

    //if(ret != null) return;


    if(rN.val<T) ret = Math.max(ret, rN.val);

    GetIn(rN.right, T);
    GetIn(rN.left, T);
  }

  GetIn(rN, T);

  if(ret != null && ret != findMinBST(rN)) return ret;


  return ret;
  // Your code here
}

function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}


function deleteNodeBST(rN, T) {



  if(rN === null) return undefined;

  if(rN.val < T)
  {
      rN.right = deleteNodeBST(rN.right, T);
  }
  else if(rN.val>T)
  {
      rN.left = deleteNodeBST(rN.left,T);
  }
  else if(!rN.left)
  {

    return(rN.right);
    //return deleteNodeBST(rN.right,T);
    //rN=rN.right;
    //return;
     ///return(rN.left);
  }
  else if(!rN.right)
  {

     return(rN.left);
    //return deleteNodeBST(rN.right,T);
    //rN= rN.left;
    //return(rN.right);
  }
  else
  {

    let S = findMin(rN.right);
    // Copy the value of the in-order successor to the target node.
    rN.val = S.val;
    // Delete the in-order successor.
    rN.right = deleteNodeBST(rN.right, S.val);

  }

  return rN;

  /*
  else if(rN.right === null && rN.left === null)
  {
     return(null);
  } */



  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
