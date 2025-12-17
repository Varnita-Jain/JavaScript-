// operators in javaScript and conditional statements.
console.log("Operators and Conditional Statements in JavaScript");

// Arithmethic Operators: - + * /
// Modlus Operator / Exponentiation Operator // Increment / Decrement.
let a = 5;
let b = 2;
console.log(a + b);
console.log("Subtraction:", a - b);
console.log("a=5, b=2, Multiplication:", a * b);
console.log("Division:", a / b);

//  A and B is divided by 2, what is the remainder? we use modulus operator %
console.log("Modulus:", a % b); 

// exponentiation operator ** is power, meaning 2 to the power of 5.
console.log("Exponentiation:", a ** b);

// Increment and Decrement - can be uesed with only one oprands. it's uninary operator.

// A++ is Pre increment. 
console.log("Increment a:", ++a); // value of a becomes 6




console.log("Decrement b:", --b); //value of b becomes 1, --b is Pre Decrement. 
console.log("Decrement b:", --b); //value of b becomes 1, --b is Pre Decrement. 

console.log("Increment b:", B++); // B++ is Post increment. value increases after

// Assignment Operators: =, +=, -=, *=, /=, %=
// if a+=1 is same as a=a+1

letc =10;
c+=5;
console.log("Assignment Operator c+=5:", c); // c=15

let c=15;
c-=3;
console.log("Assignment Operator c-=3:", c); // c=12

c*=2;
console.log("Assignment Operator c*=2:", c); // c=24
c/=4;
console.log("Assignment Operator c/=4:", c); // c=6
c%=4;
console.log("Assignment Operator c%=4:", c); // c=2

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Always return boolean values: true or false.
let x=10;
let y =5;
//equal to operator
console.log(x==y);  // false

// not equal to operator
console.log(x!=y); // true

//console.log("x===y:", x===y); // false (strict equality operator - check datatype aslo),
console.log("x===y:", x===y); // false (strict equality operator - check datatype aslo),

let m=11;

console.log("x!==y:", x!==y); // true (strict not equal operator - check datatype aslo),

// greater than operator
console.log("x>y:", x>y); // true

// less than operator
console.log("x<y:", x<y); // false

// greater than or equal to operator
console.log("x>=y:", x>=y); // true

// less than or equal to operator
console.log("x<=y:", x<=y); // false

// logical Operators: &&, ||, !
// AND, OR, NOT
let k = 5;
let y =2;
let cond1 = k>y;
let cond2 = k=y;

// logical AND operator : both should be true 
// logical OR operator : at least one should be true

console.log("Logical AND (cond1 && cond2):", cond1 && cond2); // true
console.log("Logical OR (cond1 || cond2):", cond1 || cond2); // true

// logical NOT operator : negates the value
console.log("Logical NOT (!cond1):", !cond1); // false



// Conditional Statements: if, else if, else, switch
let age = 20;
is (age>=18)
{
    console.log("You are an adult and your cast vote, your age is", age);

} 
else {
    console.log("You are a minor, your age is", age);
}

 // find the odd or even number.
 let number = 7;
 if (number % 2 === 0)
 {
    console.log(number, "is an even number.");
 }
 else {
    console.log(number, "is an odd number.");
 }

// else if statement
let mode = "dark";
if (mode === "Light")
{
    console.log("Light mode is enabled.");
}
else if (mode === "dark")
{
    console.log("Dark mode is enabled.");
}
else {
    console.log("Unknown mode.");
}


