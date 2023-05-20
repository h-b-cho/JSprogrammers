//배열 내 같은 요소 제거하기

const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
//1.
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
//2.
const uniqueNamesWithSpread = [...new Set(names)];
