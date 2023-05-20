/// &&
// flag가 true일 경우에만 실행됩니다.
// flag && func();

/// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있습니다.
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당됩니다.
// const name = participantName || "Guest";

// 객체 병합에도 이용할 수 있습니다.
const makeCompany = (showAddress) => {
  //showAddress 매개변수는 address 속성이 결과 객체에 포함되어야 하는지 여부를 결정합니다.
  return {
    name: "Cobalt. Inc.",
    ...(showAddress && { address: "Seoul" }), // showAddress 매개변수가 true인 경우에만 객체가 확산되고 결과 객체에 포함됩니다.
  };
};
console.log(makeCompany(false)); // { name: 'Cobalt. Inc.' }
console.log(makeCompany(true)); // { name: 'Cobalt. Inc.', address: 'Seoul' }
