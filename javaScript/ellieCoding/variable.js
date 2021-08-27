// 1. Use strict
// added in ES5
// use this for Vanila Javascript
// 
'use strict';
// 2. Varibale (read & write possible)
// let (added in ES6)
// Mutable type.

let a = 'Kyle';
console.log(a); // Kyle


// 2-1: GlobalScope & blockScope 
let golobalName = 'global name';
//blockScope는 코드가 끝날 때까지 쭈~욱 남아있기때문에, 즉, 박스공간을 차지하고있기때문에 함수와같은 한정된 코드를 위해서만!
{
let blockScope = 'Dongwoo';
console.log(blockScope);
name = 'hello';
console.log(blockScope);
}

// 2-2: var (don't ever use this!)
// var hoisting: var는, 어디에 선언했던 항상 제일위로 선언을 끌어올려주는 것. (move declaration from bottom to top)
// var는 blockScope이 없다.

// 2-3. Constats (read only)
// favor immutable data type always for a few reasons:
// i.e. Security / Thread Safety / Reduce human mistakes.

// 2-4. Variable types
// primitive -> single item: number, string, boolean, null, undefined, symbol.
// 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현 할 수 있기때문에 원지사료형(Primitive)이라 부른다.
// 반면, 객체는 데이터컬렉션이나 복잡한 개체를 표현할 수 있음.
// object -> box container
// function -> first-class function. 
// JavaScript는 다른 언어와는 다르게, 숫자(소수점등등..) 모든 것들은 number로 할당 가능. 게다가 그냥 let으로 처리하면 됨.
// 아래는 예시.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // type: number
console.log(`value: ${size}, type: ${typeof size}`); // type: number

//아래는 특별한 예시.
const infinity = 1 / 0; //무한대의 숫자값이 생기며, infinity가 나옴.
const negativeInfinity = -1 / 0; // 위와 동일. but negative infinity.
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 2-5. bigInt (fairly new, don't use it yet)
const bigInt = 12424353252352436246; //type: bigInt.

// 2-6. string
// 자바스크립트는 한가지문자 ~ 여러문자이던간에 string으로 간주한다.
// template literals (string) -> 백틱으로 뭐든 다 문장으로 만들 수 있으며, 백틱안에 또 ${내가 따로 설정하고싶은 문자}로 출력 가능하다.
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);


// 2-7. boolean
// false: 0, null, undefined, NaN, ''
// true: any other value;
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// 3. null과 undefined: 내가 null로 지정한 경우. undefined: 지정해도 되고, 지정안해도 undefined.
let nothing = null; // 존재하지 않는 값, 비어있는 값, 알수 없는 값.
console.log(`value: ${nothing}, type: ${typeof nothing}`);

let x; 
//or
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`)

// 4. symbol, create unique identifiers for objects.
// 고유한 식별자가 필요하거나, 동시에 많은 식별자가 필요하다 할때!
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`)

let text = '9' / '2';
console.log(`value: ${text}, type: ${typeof text}`) //number

let text = 'hello';
console.log(text.charAt(0)); //h