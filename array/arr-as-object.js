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

const Arr = ["가", "나", "다", "라"];
for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}
console.log("--------------");
for (const item of Arr) {
  console.log(item);
}
