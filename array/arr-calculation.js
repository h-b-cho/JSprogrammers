const arr = [1, 2, 3];

arr.push(4);
console.log(arr); // [ 1, 2, 3, 4 ]

arr.push(-1, -2);
console.log(arr); // [ 1, 2, 3, 4, -1, -2 ]

// push의 시간복잡도: 인덱스 값만 알면 바로 타겟위치에 접근이 가능하므로 O(1)

arr.splice(0, 3); // index 0 위치를 시작으로 3개의 요소 삭제
console.log(arr); // [ 4, -1, -2 ]

arr.splice(2, 1, 12); // index 2 위치를 시작으로 1개의 요소 삭제 후 그 자리에 int 12 추가
console.log(arr); // [ 4, -1, 12 ]

// splice의 시간복잡도: 순차적으로 탐색하며 접근하므로 O(n)
