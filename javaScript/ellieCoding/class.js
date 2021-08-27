'use strict';
// Object-oriented programming
// Class: template, declare once, no data in.
// Object: instance of a class, created many times, data in.
// Class는 한번만 선언. 실제로 데이터를 만들어주는 것은 Object.

// JavaScript classes
// = introduced in ES6
// = Syntactical sugar over prototype-based inheritance.
//   ex) Class는 붕어빵 반죽/틀. Object는 속재료가 된다.


 // 1. Class declarations
 class Person {
     // constructor
     constructor(name, age) {
     // fields
     this.name = name;
     this. age = age;    
     }
 }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }

const kyle = new Person('kyle', 29);
console.log(kyle.name);
console.log(kyle.age);
kyle.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {

    }
    set age(value) {}
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

