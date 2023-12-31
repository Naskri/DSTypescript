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

  /*
    Pop method - remove a node from end of SLL.
  */

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      const deleted = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return deleted;
    }

    let current = this.head;
    let previous = current;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;

    this.length--;

    return current;
  }
  /*
    Shift method - remove a node from beginning of SLL.
  */
  shift() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    this.head = current.next;

    if (this.length === 1) {
      this.tail = current.next;
    }

    this.length--;

    return current;
  }

  /*
    Unshift method - add a node on beginning of SLL.
    @params {value of node}
  */

  unshift(value: T) {
    const newNode = new SLLNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  /*
    Get method - get a node on specific index.
    @params {index to search}
  */

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    if (!this.head) return null;

    let tempIndex = 0;
    let finded = this.head;

    while (tempIndex < index) {
      if (!finded.next) return;

      finded = finded?.next;
      tempIndex++;
    }

    return finded;
  }

  /*
    Set method - set a value on node in specific index.
    @params {value,index}
  */

  set(value: T, index: number) {
    const node = this.get(index);

    if (!node) return null;

    node.value = value;

    return node;
  }

  /*
    Insert method - add node on specific index.
    @params {value,index}
  */

  insert(value: T, index: number) {
    if (index === 0) {
      return this.unshift(value);
    }

    const prevElement = this.get(index - 1);

    if (!prevElement) return null;

    const node = new SLLNode(value);

    node.next = prevElement.next;

    prevElement.next = node;

    this.length++;

    return node;
  }

  /*
    Remove method - remove node on specific index.
    @params {index}
  */

  remove(index: number) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevElement = this.get(index - 1);

    if (!prevElement) return null;

    const removed = prevElement.next;

    if (!removed) return null;

    prevElement.next = removed.next;

    this.length--;

    return removed;
  }
}

const singlyLL = new SinglyLinkedList();

singlyLL.push(3);

singlyLL.unshift(10);

singlyLL.insert(50, 0);
singlyLL.insert(250, 1);
singlyLL.insert(250, 4);

singlyLL.remove(0);

console.log(singlyLL);

export default singlyLL;
