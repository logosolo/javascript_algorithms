function Node(element){
    this.element = element;
    this.prev = null;
    this.next = null;    
}

function DList(){
    this.head = new Node('head');
}

DList.prototype = {
    insert: function(newElement, item){
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.prev = current;
        newNode.next = current.next;
    },
    remove: function(item){
        var currNode = this.find(item);
        if(!(currNode.next == null)){
            currNode.prev.next = currNode.next;
            currNode.next = null;
            currNode.prev = null;
        }
    }
}

