function tree(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.depth = depth;
}

function BST() {
    this.root = null;                
    this.inOrder = inOrder;
}

BST.prototype = {
    inert: function(data){
        var tree = new new tree(data);         
        
        if(this.root == null){
            this.root = tree;            
        }else{
            var current = this.root;
            var parent;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = tree;
                        break;
                    } 
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = tree;
                        break;	
                    }	
                }         
            }	
        }
    }
}


