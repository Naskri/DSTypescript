/*
  SLLNode class representation a node in singly linked list.

  @types {  generic T }
  @params { value of node }
  @visualization {value:3,next:null} | {value:3,next:pointer to next node}

*/

export class SLLNode<T> {
  value: T;
  next: SLLNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/*

  SinglyLinkedList class representation a SLL data structure.
  @types {  generic T  }

*/

export class SinglyLinkedList<T> {
  head: SLLNode<T> | null = null;
  tail: SLLNode<T> | null = null;
  length = 0;

  /*
    Push method - add a node to the end of SLL.
    @params (value of new node)
  */

  push(value: T) {
    const newNode = new SLLNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }
}

const singlyLL = new SinglyLinkedList();

console.log(singlyLL);

export default singlyLL;
