const arr = Array.from(Array(10), function (v, k) {
  return k + 1;
});
arr.length = 8;
console.log(arr.join(", ")); // 1, 2, 3, 4, 5, 6, 7, 8

arr.reverse();
console.log(arr.join(", ")); // 원본을 조작. 8, 7, 6, 5, 4, 3, 2, 1

const arr2 = [-1, -2, -3];
const arr3 = arr.concat(arr2);
console.log(arr3.join(", ")); // 원본 보존, 새 배열 선언해 담아야. 8, 7, 6, 5, 4, 3, 2, 1, -1, -2, -3

arr3.pop();
arr3.push(10);
console.log(arr3.join(", ")); // 8, 7, 6, 5, 4, 3, 2, 1, -1, -2, 10

arr3.shift(); // 맨 앞 요소 pop
arr3.unshift(50); // 맨 앞에 push
arr3.unshift(51); // 맨 앞에 push
arr3.unshift(52); // 맨 앞에 push
console.log(arr3.join(", ")); // 52, 51, 50, 7, 6, 5, 4, 3, 2, 1, -1, -2, 10

/* 
.shift()와 .unshift() 모두 "맨 앞" 요소를 배열에 추가하거나 삭제하는 메소드입니다. 
"맨 앞" 요소를 추가/삭제하기 때문에 O(n)입니다. 
배열의 맨 앞, 중간에 추가/삭제를 하게 된다면 그 위치 이후 요소들의 인덱스를 한 칸씩 당겨주거나 밀어야 합니다. 
그렇기 때문에 shift과 unshift는 선형 시간 O(n)이 소요됩니다. 

반면 .push()와 .pop()은 배열의 "맨 마지막"에 요소를 삭제하거나 추가합니다.
이땐 그 이후의 요소가 없으니 당기거나 밀어주는 로직을 수행하지 않습니다. 따라서 push와 pop 함수는 상수 시간 O(1)만에 수행됩니다.
*/

const Arr = ["가", "나", "다", "라"];
for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}
console.log("--------------");
for (const item of Arr) {
  console.log(item);
}
