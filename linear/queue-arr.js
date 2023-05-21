// First In First Out
// array로 구현, 맨 앞 요소 front와 맨 뒤 요소 rear의 인덱스값을 저장해놓고 이를 변경해가는 로직.

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0; // front 노드의 인덱스가 0
        this.rear = 0;  // rear 노드의 인덱스가 0
    }

    enqueue(val) {
        this.queue[this.rear++] = val; // 현재 rear의 인덱스를 ++, 수정된 rear 인덱스에 해당하는 자리에 접근, 우리가 넣고자했던 값 부여.
    }

    dequeue() { // 매개변수가 당연히 없겠지... 큐의 맨 앞 노드(front)를 뽑는다.
        const val = this.enqueue[this.front];
        delete this.queue[this.front];
        this.front++; // dequeue 연산을 하다 보면 front의 인덱스가 0이 아니게 된다. shift 연산처럼 매번 인덱스를 땅겨주지 않는 듯....
        return val;
    }

    /* JS 배열에서 shift연산은 선형 시간이 소요된다. 고로 큐에서 기대하는 로직이 수행되지 않는다. */

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

