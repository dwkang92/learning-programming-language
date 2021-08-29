// alert, prompt, confirm 을 이용한 상호작용

// alert
// alert("Hello") // Hello

// prompt
// Browser에서 제공하는 prompt 함수는 두개의 인수를 받습니다.
// result = prompt(title, [default]);
// title : 사용자에게 보여줄 문자열
// default : 입력 필드의 초깃값 (선택값)

let age = prompt('나이를 입력해주세요.', 100);

alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.


// 숫자형으로 변환 시 undefined는 0이 아니라 NaN이 됩니다.
// 문자열 "0"과 " "같은 공백은 불린형으로 변환 시 true가 됩니다.