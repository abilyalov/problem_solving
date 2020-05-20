var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.reverse = function() {
      if (!this.head || !this.head.next) {
        return this.head
      }

      let tail;
      let temp;
      let current = this.head;
      while(current !== null) {
        if(!tail) tail = current;
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }

      this.head = temp.prev;
      this.tail = tail
    }
  };