let arr3 = Array(10).fill(0);
console.log(arr3);
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

let arr4 = Array.from({ length: 10 }, (_, i) => i * 2);
console.log(arr4);
// [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
/*
Array.from()에 전달되는 첫 번째 인수는 객체 리터럴 { length: 10 }입니다. 
length 속성은 10으로 설정되어 결과 배열의 길이가 10이어야 함을 나타냅니다.
*/
/*
두 번째 인수는 매핑 함수 (value, index) => index * 2입니다.
인덱스에 '2'를 곱하여 새 배열의 각 요소에 대한 값을 생성합니다.
*/
