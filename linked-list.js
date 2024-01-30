/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. returns undefined */

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    /** unshift(val): add new value to start of list. returns undefined */

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    /** pop(): return & remove last item.Throws error if list is empty.*/

    pop() {
        return this.removeAt(this.length - 1);
    }

    /** shift(): return & remove first item.Throws error if list is empty. */

    shift() {
        return this.removeAt(0);
    }

    /** getAt(idx): get val at idx.Throws error if index is invalid.*/

    getAt(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error('Invalid index');
        }

        return this._get(idx).val;
    }

    /** setAt(idx, val): set val at idx to val. Throws error if index is invalid. */

    setAt(idx, val) {
        if (idx < 0 || idx >= this.length) {
            throw new Error('Invalid index');
        }

        let curValue = this._get(idx);
        curValue.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. Throws error if index is invalid. returns undefined*/

    insertAt(idx, val) {
        if (idx < 0 || idx >= this.length) {
            throw new Error('Invalid index');
        }
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        let prev = this._get(idx - 1);

        let newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
    }

    /** removeAt(idx): return & remove item at idx, Throws error if index is invalid.*/

    removeAt(idx) {
      if (idx < 0 || idx >= this.length) {
          throw new Error('Invalid index');
      }
  
      if (idx === 0) {
          return this.shift();
      } else if (idx === this.length - 1) {
          return this.pop();
      } else {
          let prevNode = this._get(idx - 1);
          let removedNode = prevNode.next;
          prevNode.next = removedNode.next;
          this.length--;
          return removedNode.val;
      }
  }

    /** average(): return an average of all values in the list */

    average() {
      if (this.length === 0) {
          throw new Error('Cannot calculate average on an empty list');
      }
  
      let sum = 0;
      let current = this.head;
  
      while (current !== null) {
          sum += current.val;
          current = current.next;
      }
  
      return sum / this.length;
  }
  
}

module.exports = LinkedList;
