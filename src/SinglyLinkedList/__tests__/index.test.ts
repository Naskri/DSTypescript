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
});
