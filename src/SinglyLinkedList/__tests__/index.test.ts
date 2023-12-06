import { describe, test, expect } from "vitest";
import { SinglyLinkedList } from "..";

describe("Singly Linked List - data structure tests suit", () => {
  test("Should initially have head,tail on null and length on 0", () => {
    const SLL = new SinglyLinkedList();

    expect(SLL.head).toBeNull();
    expect(SLL.tail).toBeNull();
    expect(SLL.length).toBe(0);
  });

  test("Push method without a head and tail", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(5);

    expect(SLL.head?.value).toBe(5);
    expect(SLL.tail?.value).toBe(5);
    expect(SLL.length).toBe(1);
  });

  test("Push method with a head and tail", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(5);

    expect(SLL.head?.value).toBe(5);
    expect(SLL.tail?.value).toBe(5);
    expect(SLL.length).toBe(1);

    SLL.push(10);

    expect(SLL.head?.value).toBe(5);
    expect(SLL.tail?.value).toBe(10);
    expect(SLL.length).toBe(2);
  });

  test("Pop method without head and tail", () => {
    const SLL = new SinglyLinkedList();

    expect(SLL.pop()).toBeNull();
  });

  test("Pop method with length of 1", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(10);

    expect(SLL.pop()?.value).toBe(10);
    expect(SLL.head).toBeNull();
    expect(SLL.tail).toBeNull();
    expect(SLL.length).toBe(0);
  });

  test("Pop method with multi elements", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(10);
    SLL.push(20);
    SLL.push(30);

    expect(SLL.pop()?.value).toBe(30);
    expect(SLL.head?.value).toBe(10);
    expect(SLL.tail?.value).toBe(20);
    expect(SLL.length).toBe(2);

    SLL.pop();

    expect(SLL.tail?.value).toBe(SLL.head?.value);
    expect(SLL.length).toBe(1);
  });

  test("Shift method without a head and tail", () => {
    const SLL = new SinglyLinkedList();

    expect(SLL.shift()).toBeNull();
  });

  test("Shift method with a head", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(10);

    expect(SLL.shift()?.value).toBe(10);

    SLL.shift();

    expect(SLL.head).toBeNull();
    expect(SLL.tail).toBeNull();
    expect(SLL.length).toBe(0);
  });

  test("Unshift method without a head", () => {
    const SLL = new SinglyLinkedList();

    SLL.unshift(10);

    expect(SLL.head?.value).toBe(10);
    expect(SLL.tail?.value).toBe(10);
    expect(SLL.length).toBe(1);
  });

  test("Unshift method with a head", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(15);

    expect(SLL.head?.value).toBe(15);

    SLL.unshift(10);

    expect(SLL.head?.value).toBe(10);
    expect(SLL.tail?.value).toBe(15);
    expect(SLL.length).toBe(2);
  });

  test("Get method with a invalid index", () => {
    const SLL = new SinglyLinkedList();

    const invalidLowerIndex = SLL.get(-1);

    expect(invalidLowerIndex).toBeNull();

    const invalidHigherIndex = SLL.get(SLL.length);

    expect(invalidHigherIndex).toBeNull();
  });

  test("Get method without a head", () => {
    const SLL = new SinglyLinkedList();

    const finded = SLL.get(0);

    expect(finded).toBeNull();
  });

  test("Get method with a head and valid index", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(3);
    SLL.push(4);
    SLL.push(35);

    const finded = SLL.get(2);

    expect(finded?.value).toBe(35);
  });

  test("Set method with a invalid index and value", () => {
    const SLL = new SinglyLinkedList();

    expect(SLL.set(40, 30)).toBeNull();
  });

  test("Set method with a valid index and value", () => {
    const SLL = new SinglyLinkedList();
    SLL.push(3);
    SLL.push(4);
    SLL.set(350, 1);

    expect(SLL.tail?.value).toBe(350);
    expect(SLL.head?.value).toBe(3);
    expect(SLL.length).toBe(2);
  });

  test("Insert method with a SLL length of 0", () => {
    const SLL = new SinglyLinkedList();

    SLL.insert(250, 0);

    expect(SLL.head?.value).toBe(250);
    expect(SLL.tail?.value).toBe(250);
  });

  test("Insert method with invalid index", () => {
    const SLL = new SinglyLinkedList();

    SLL.insert(250, 0);

    SLL.insert(300, 12);

    expect(SLL.length).toBe(1);
  });

  test("Insert method with valid index of specific position", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(3);
    SLL.push(4);

    expect(SLL.head?.value).toBe(3);
    expect(SLL.head?.next?.value).toBe(4);

    SLL.insert(300, 1);

    expect(SLL.head?.next?.value).toBe(300);
    expect(SLL.head?.next?.next?.value).toBe(4);
  });

  test("Remove method with valid index", () => {
    const SLL = new SinglyLinkedList();

    SLL.push(3);

    const removed = SLL.remove(0);

    expect(removed?.value).toBe(3);
  });
});
