// 자바스크립트의 Array은 HashMap에 가깝다. 매우 동적이다.
const arr = Array.from(new Array(50), (_, k) => k * 3 + 1);
arr.push(0);
// console.log(arr);
// [
//   1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58,
//   61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112,
//   115, 118, 121, 124, 127, 130, 133, 136, 139, 142, 145, 148, 0,
// ];

arr["string"] = -1;
console.log(arr["string"]); // -1

arr["myname"] = "Abby";
console.log(arr);
// [
//   1,   4,   7,   10,
//   13,  16,  19,  22,
//   25,  28,  31,  34,
//   37,  40,  43,  46,
//   49,  52,  55,  58,
//   61,  64,  67,  70,
//   73,  76,  79,  82,
//   85,  88,  91,  94,
//   97,  100, 103, 106,
//   109, 112, 115, 118,
//   121, 124, 127, 130,
//   133, 136, 139, 142,
//   145, 148, 0, string: -1, myname: 'Abby'
// ]

console.log(arr.length); // 51이다... 53이 아니라!!!

arr.push(5000);
console.log(arr.length); // 52

// 숫자 외의 값을 넣는다면 자동으로 문자열로 변환된 값이 키 값이 된다.
// 이는 자스의 배열이 근본적으로 객체 타입이기 때문이다.
// 그렇지만 배열이 일반적인 객체와 다른 점은 length가 내부적으로 관리된다는 점이다.
// 인덱스와 무관한 값을 인덱스로 넣은 경우 인덱스로 카운트되지 않는다.
// 이는 좋은 코드 작성법이 아니므로, 활용보다는 주의해야 하는 특징에 해당한다.
