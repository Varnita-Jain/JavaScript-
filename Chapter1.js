console.log("Chapter 1: Introduction to JavaScript");
console.log(
  "JavaScript is a versatile programming language used primarily for web development."
);

// variables - variables are like containers that store data values.
// name your varibles properly, should be meaningful.
// you can change value of variable anytime. As it is dynamicaly typed.
let name = "varnita";
console.log(name);
let age = 24;
console.log(age);
let X = null; //Empty value
console.log(X);
let y = undefined; //Variable declared but not assigned a value.
console.log(y);

let isStudent = true; //Boolean value
console.log(isStudent);
let isemployee = false;
console.log(isemployee);

// variables name rules
// 1. case sensitive
// 2. only use letters, digits, underscores and dollar signs.
// 3. cannot start with a digit
// 4. cannot use reserved keywords.
// Use camelCase for naming variables.

// Use keyword in variable to declare a variable.
// let - block scoped variable
// let is the preferred way to declare variable. as it through error if we re-declare variable.
let city = "new york";
console.log(city);
// IF WE DEFINED A VARIABLE USING LET AND CAN NOT ASSIGN VALUE IN IT. THEN IT WILL BE UNDEFINED.
let state;
console.log(state); // undefined , ONLY POSSIBLE IN LET

// var - function scoped variable, oldest way to declare variable. now we don't use var.
var country = "USA";
console.log(country);

// in var we can re-declare and re-assign value. - Problem with var.
// scope - Golbal scope
var country = "Canada";
console.log(country);

// const - cant re-assign value. constant value.
const Pi = 3.14;
console.log(Pi);

// data types in javascript
// 1. Primitive data types - number, string, boolean, null, undefined, symbol, bigint
// 2. Non-primitive data types - object, array, function
age = 25; // number (re-assigning existing variable)
console.log(typeof age);

let firstName = "varnita"; // string
console.log(typeof firstName);

let isfollowing = true; // boolean
console.log(typeof isfollowing);

let X_undefined; // declared but not assigned -> undefined
console.log(typeof X_undefined); // undefined

let Y = null;
console.log(typeof Y); // object (this is a bug in javascript)

let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntNum); // bigint

// non-primitive data types
// arrays, objects, functions

// object - Collection of values.
// values are stored in key-value pairs.
const student = {
  Full_name: "varnita",
  age: 24,
  isEnrolled: true,
  Percentage: 88.5,
};
console.log(typeof student); // object
console.log(student);

console.log(student["age"]); // way to print if i want signle value from object.
console.log(student.age); // another way to print value from object.

// Question 1-
// create an const object called " Product" to store information shown in picture which is a pen on amaazon.

const Product = {
  productName: "Gel Pen",
  brand: "Reynolds",
  price: 270,
  rating: 4,
  offer: 5,
};
console.log(Product);
console.log(typeof Product);

// Question 2 - Create a Const object called "instagram Profile" to store information shown in picture.
const instagramProfile = {
  fullName: "varnita",
  userName: "@varnita_24",
  followers: 500,
  following: 300,
  posts: 100,
  isfollowing: true,
};
console.log(instagramProfile);
console.log(typeof instagramProfile["isfollowing"]); // boolean
console.log(typeof instagramProfile.followers); // number
console.log(typeof instagramProfile.userName); // string
