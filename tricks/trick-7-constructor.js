// class는 객체의 초기 값을 지정하기 위해서 객체가 생성될 때 실행되기로 약속된 함수가 있습니다. 
// 바로 constructor 함수입니다.
// 우리는 이 함수를 이용해 객체의 초기 값을 설정할 수 있습니다. 

class Person{
    constructor(first, second, third){ // 약속된 이름으로, 바꾸면 안됩니다.
        this.id = first;
        this.pw = second;
        this.age = third;
    }
}
var p1 = new Person('kim', 10, 20);
var p2 = new Person('h-b-cho', 500, 5);
console.log('p2.id : ', p2.id);
console.log('p1.age : ', p1.age);