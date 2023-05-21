class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  } // 새 Node 생성 연산은 const NewNode = new Node(val); 과 같이 new 메소드를 사용할 수 있다.
  // new 키워드는 JavaScript에서 객체의 인스턴스를 생성하는 데 사용되는 연산자. 
  // new 연산자를 사용하여 클래스의 생성자를 호출하면 해당 클래스의 새로운 인스턴스가 생성된다.
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(val) {
    let theNode = this.head;
    while (theNode !== null && theNode.value !== val) {
      theNode = theNode.next;
    }
    return theNode;
  }

  append(val) {// == arrray.push() in JS == list_push_back() in Pintos-Kaist
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, val) {
    const newNode = new Node(val);
    newNode.next = node.next;
    node.next = newNode;
    if (this.tail === node) {
      this.tail = newNode;
    }
  }

  remove(val) {
    if (this.head === null) {
      return; // 리스트가 비어있는 경우 그냥 return
    }
    if (this.head.value === val) { // 우리가 삭제하고자 하는 노드가 head였을 경우,
      this.head = this.head.next;  // 현재 헤드를 없애버리고 헤드 바로 다음 노드를 헤드라고 설정해버림.
      if (this.head === null) { // 만약 다음 노드를 헤드라고 설정했는데 그게 null, 즉 리스트에 노드가 딱 하나 있었던 상황이었던 것이라면?
        this.tail = null;       // 연결리스트의 tail에 대한 정보를 현재 상황에 맞게 tail도 null로 만들어버림. 즉 리스트를 다시 깡통으로 만들어 줌.
      }
      return; // 그리고 끝냄.
    }

    let theNode = this.head;

    while (theNode.next !== null && theNode.next.value !== val) {
      theNode = theNode.next;
    }

    // while문 빠져 나왔을 땐 말인즉 theNode.next가 우리가 삭제하고자 하는 노드인 거겠지? theNode는 즉 "우리가 삭제하려는 노드의 직전에 위치한 노드"다.
    theNode.next = theNode.next.next;
    // 우리가 삭제하고자 하는 노드의 직전 노드에 대한 연결 논리를 .next가 아닌 .next.next로 한 다리 건너띄워버린다. 그렇게 되면 자연스럽게 우리가 삭제하려던 노드가 리스트에서 제외된다.
    // 삭제된 노드는 이후 가비지콜렉션을 통해 메모리 상에서 free된다.

    if (theNode.next === null) {
      this.tail = theNode; // 이떄, 만약 재설정한 연결 논리상의 theNode.next가 null이었다면, 즉 우리가 삭제하려던 노드가 tail이었었다면 연결리스트의 tail에 대한 정보를 현재 상황에 맞게 수정한다.
    }
  }

  size() {
    let count = 0;
    let currNode = this.head;
    while (currNode) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }
}

/* 
this는 현재 실행 중인 메서드 또는 함수가 속한 객체를 참조하는 특수한 키워드. 
this는 현재 실행 컨텍스트에 따라 동적으로 바인딩되기 때문에, 객체가 인스턴스화되어 클래스의 메서드를 호출할 때 this는 해당 인스턴스를 가리킨다. 
즉, 위 코드에서 this는 SinglyLinkedList 클래스의 인스턴스를 참조. 
클래스를 기반으로 생성된 개별적인 실체를 "인스턴스"라고 한다. 클래스는 객체 즉 오브젝트를 정의하는 구조체(stuct)와 같다. 구조체를 통해 생성한 실체가 "인스턴스".
*/