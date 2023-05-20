const arr1 = Array.from(new Array(50), (_, k) => k);
const arr2 = arr1;
//1.
console.log(arr1.slice(2, 4)); // [2, 3] == index 2를 시작으로 index 4 직전까지 추출.
console.log(arr1.length); // 50 == 원본 유지.
//2.
console.log(arr2.splice(2, 4)); // [2, 3, 4 ,5] == index 2를 시작으로 4개의 요소 추출.
console.log(arr2.length); // 46 == 원본 조작!!! 추출된 요소는 원본에서부터 삭제된다.
