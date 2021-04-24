var isCousins = function(root, x, y) {
    function getDepthAndParent(node, n, depth=0, parent){
        if(!node) return null;
        if(node.val === n) {
            return {depth, parent};
        }
        let left = getDepthAndParent(node.left, n, depth+1, node);
        let right = getDepthAndParent(node.right, n, depth+1, node);
        return left || right;
    }
    let {depth: xDepth , parent: xParent } = getDepthAndParent(root,x);
    let {depth: yDepth , parent: yParent } = getDepthAndParent(root,y);

    return xDepth === yDepth && xParent !== yParent;
};