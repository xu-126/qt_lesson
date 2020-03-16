// leetcode 110   判断是否为平衡二叉树(AVL树)
var isBalanced = function(root) {
    function height(node) {
        if (node === null) {
            return 0;
        }
        let h = Math.max(height(node.left),height(node.right)) + 1;
        return h;
    }
    if(!root) {
        return true;
    }
    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
}