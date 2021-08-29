// Day 1: String type in JavaScript
// In Javascript, we can create a string by using the double qoutes or single quotes.
// For example, "Hello World" it returns -> Hello World
// Or you can 'Hello Korea!' it returns -> Hello Korea!


// ---------------------------------------------
//1.  Creating strings
const stringA = "Hi, i am Kyle"
const stringB = "Also a string primitive"

const stringC = new String("A string object");



// ---------------------------------------------
// 2. String Property: .length() or charAt()
// .length property is used to return the length of the string.
// For instance, 
"Hello".length -> 5
// or assuming you have a variable called text,
let text = "Hello World!";
text.lengh; -> 11

// example
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15



// ---------------------------------------------
// 3. Comparing strings
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

// Similar result can be achieved using the localeCompre() inherited by String instances.
// Basic format is 
string.localeCompare(compareString[, locale[, options]])
// and you can change as follows:
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)

// example
alert('a'.localeCompare('b')); // -1
alert('b'.localeCompare('a')); // 1
alert('b'.localeCompare('b')); // 0


// ---------------------------------------------
// 4. toLowerCase() or toUpperCase()
"HELLO".toLowerCase(); // "hello";
"hello".toUpperCase(); // "HELLO";
// Note that .length should not have () after it because it is a property (a value that has already been computed). 
//Whereas .toLowerCase() is a method that requires the () because it's an action that you are performing.




// ---------------------------------------------
// 5. Substring signature
// syntax : something.substring(indexStart, indexEnd)
// indexStart: the position of the first character included in the result.
// indexEnd: the position of the first character ignored in the result.

// example: how can i return "ava" in a word "Javascript"?

const language = "JavaScript";
language.substring(1, 4); // "ava". why 1, 4? last 4 is ignored (not counted)

// then, how about "Script"?
language.substring(4)


// question
function skipFirstCharacter(text) {
    return(text.substring(1))
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"



// ---------------------------------------------
// PLUS CHAPTER
//1. Character access & Object.defineProperty()
return 'banana'.charAt(1) // returns 'a'
// OR YOU CAN ALSO MAKE AS FOLLOWS:
return 'banana'[1] // returns 'a'

//example 
let stringFruits = 'Apple is fruits!'
alter(string.Fruits.charAt(1)) // A
alter(string.Fruits.charAt(stringFruits.length-1)); // !
alter(string.Fruits.charAt(1000) ==''); // true