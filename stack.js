// Last In First Out
// linked-list로 구현 시 head가 stack의 top, 즉 마지막 노드가 stack의 맨 앞으로 온다.
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        // 리스트가 비어있었던 경우에 대한 예외처리가 필요 없다. 말인즉 기존에 top이었던 노드가 null인 상황인데 그렇다 한들 19행에서 newNode.next가 null이 되는 것이 옳기 때문.
        newNode.next = this.top; // 기존에 top이었던 노드가 newNode.next로서 연결되고, 
        this.top = newNode;      // 우리가 방금 생성해 push한 노드는 무조건 이제 이 스택의 top이다.
        this.size++;
    }

    pop() { // 매개변수를 안 받는다. 무조건 스택의 맨 위(맨 앞), 즉 연결리스트의 논리상 맨 마지막 요소를 팝한다.
        if (this.top === null) {
            return; // 스택이 비어있는 경우 그냥 return (undefined)
        }
        const val = this.top.value;
        this.top = this.top.next;
        this.size--;
        return val; // pop된 노드의 값이 return된다.
    }

    size() {
        return this.size;
    }
}