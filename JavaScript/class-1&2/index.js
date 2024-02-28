console.log(2+2);
// document.write("hey there! ");
// alert("helo");

// Data Types

// integers
// Float
// String
// Boolean
// undefined = undefined;
// null = null;
// Array

// In array values shown by their indexes
// array[0]= 1;  
// array[1]=2

// variables

// var, let, const

// In 'let' duplicates variables are not allowed
// let name = "Ayesha";
// let name = "Mehboob";

// In 'var' we can use duplicates
// var age = 20;
// var age = 30;

// In 'const' also duplicates are not allowed
// const pi = 3.14;
// const pi = 3.15;
//         alert(pi);

// operators
// arthimatic operators
// +, -, *, /, %, ++, --

// let a1 = 50;
// let a2 = 20;

// let result = a1 + a2;
// let result = a1 - a2;
// let result = a1 * a2;
// let result = a1 / a2;
// let result = a1 % a2;
// console.log(result);

// '++' will add one number in existing one
// a1++;
// '--' will subtract one number from existing number
// a2--;

// console.log(a1);
// console.log(a2);

// Comparison Operators

// ==, ===, !=, !==, >, <, >=, <=

// let a1 = "20";
// let a2 = 30;

// "==" this will convert the string into int data type first
// console.log(a1 == a2);

// '===' this will not covert the string into the int, will display values as it is  
// console.log(a1 === a2); 

// logical operators
// &&, ||, !

// let num1 = false;
// let num2 = false;

// console.log(num1 && num2);
// or
// console.log(2==2 && 2==2);

// console.log(num1 || num2);

// console.log( !num1);


// Type Casting

// let a1 = 10;
// let a2 = "20abc";

// if only nmbers have to convert in different data type
// console.log(a1 + Number(a2));

// in this case only numbers will be extracted
// console.log(a1 + parseInt(a2));

//console.log(a1 + parseFloat(a2));



// if, else if, else

let a1 = parseInt(window.prompt("Enter Number1: "));
let a2 = parseInt(window.prompt("Enter Number2: "));

if (a1 + a2 > 100){
    alert("Sum is greater than 100")
}
else if(a1 + a2 < 100){
    alert("Sum is less than 100")
}
else{
    alert("Sum is equal to 100")
}