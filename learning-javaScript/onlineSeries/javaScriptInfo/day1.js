'use strict'

let n = 123;
n = 12.345;
// number type은 정수 및 부동소수점 숫자를 의미한다.
// 숫자형과 관련된 연산은 우리가 익히 일고있는 연산기호들을 사용하여 계산 할 수 있다.
// 숫자형 외에는 Infinity, -Infinity, NaN과 같은 '특수숫자값(Special Numeric Value)'이 포함된다.
// Infinity = 무한대를 나타내며, 어느 숫자든 0으로 나누면 무한대를 얻을 수 있다.
// i.e. alert(1/0); // Infinity
// NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값이다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산중 에러가 발생하는데, 이때 NaN이 반환된다.

// BigInt
// 정수 리터럴 끝에 n을 붙여주면  BigInt가 완성된다.

// 문자형 (String)
// 큰 따옴표와 작은 따옴표는 파이썬과 마찬가지로 큰 뜻을 두지 않는다.
// 백틱과 ${}을 사용하면, 괄호안에 원하는 변수나 표현식ㄷ을 문자열 중간에 손쉽게 넣을 수 있다.

// 불린형(true, false)

// null 값
// 존재하지 않는 값, 비어있는 값, 알수 없는 값을 나타내는데에 사용한다.


// undefined 값
// 값이 할당 되지 않은 상태.
let age;
alert(age); // 'undefined'


// typeof 연산자
// 2가지 형태의 문법을 지원한다.
// typeof x, typeof(x)

// 표현식은 문자열 "name"입니다.
alert( `hello ${"name"}` ); // hello name

// 표현식 안에 변수가 들어가 있기 때문에, 이 변수가 평가되어 전체 문자열이 반환됩니다.
alert( `hello ${name}` ); // hello Ilya