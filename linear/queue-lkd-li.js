// First In First Out
// linked-list로 구현, head와 tail 포인터로 접근.

class Node {
    constructor(val) {
        this.value= val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        const theNode = new Node(val);
        if (this.head == null) {
            this.head = this.tail = theNode;
        }
        else {
            this.tail.next = theNode; // 현재 rear 요소의 다음 요소가 방금 우리가 생성해 추가한 노드.
            this.tail = theNode;      // rear에 대한 정보를 방금 우리가 생성해 추가한 노드로 재설정.
        }
        this.size++;
    }

    dequeue() { 
        const val = this.head.value;
        this.head = this.head.next;
        this.size--;
        return val;
    }

    peek() {
        return this.head.value;
    }

    size() {
        return this.size;
    }
}

