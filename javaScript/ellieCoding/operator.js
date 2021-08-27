//1. String Concentation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


//3. Increment and decrement operators
//counter = counter + 1;
let counter = 2;
const preInrement = ++counter;
const postInrement = counter++;

//4. Assignment operators.
let x = 3;
let y = 7;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equl

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
// || (or): find the first truthy value. 
// value or expression 중 하나만이라도 true 라면 true로 출력 됨.
// or 연산자는 처음혹은 나중에 true가 나오면 결국 true가 됨. 참고: check()함수는 ture임.
// sinmple한 코드를사용하자. 처음부터 헤비한 함수를 앞에두면 안됨.
console.log(`or: ${value1 || value2 || check()}`);

// && (and): finds the first falsy value.
// 세가지 모두가 true 여야함. 처음부터 false면 그냥 바로 false will be printed.

// often used to compress long if-statement
// nullableObject && nullableObject.something.

function check() {
    for (let i = 0; i < 10; i++) {
        //waiting time
        console.log('wow!');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// quiz: equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operatpors: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('welcom, ellie');
}   else if (name === 'coder') {
    console.log('you are amazing coder');
}  else {
    console.log ('unknown');
}

// 9. Ternary operater ?. if를 간단하게 사용 할 수 있음.
// condition ? value1 : value2;
// ? : true야? 맞으면 yes로 아니면 no로.
console.log (name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthly,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블록을 먼저 실행하고싶을때만!
do {
    console.log(`do while: ${i}`);
    i--;
}   while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
// for: 3 / for: 2 / for: 1

for (i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
// 되도록이면 피하자 이 식은.
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
const i = 0;
for (let i = 0; i < 11; i % 2) {
    console.log(`binary number: ${i}`)
} continue;

// answer1 
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

//or
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}