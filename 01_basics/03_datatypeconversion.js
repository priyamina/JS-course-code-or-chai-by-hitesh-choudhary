/*const score= "33"
const score1= "33abc"
console.log(score)
console.log(typeof(score))
// conversion from string to no.
let valueinnumber =Number(score)
console.log(typeof valueinnumber)
console.log(valueinnumber)
// for score2 ,this is NaN:not a number 
let valueinnumber1 =Number(score1)
console.log(typeof valueinnumber1)
console.log(valueinnumber1)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null=>0 and undefined =>true
*/
/*
// string to boolean
let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// number to string conversion:
let someNumber = 37

let stringNumber = String(someNumber)
 console.log(stringNumber);
console.log(typeof stringNumber);
*/
/*
// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);12
// console.log(1 + "2");12
// console.log("1" + 2 + 2);122
// console.log(1 + 2 + "2");32

// use paranthesis for workign in big compaies .console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

// num1 = num2 = num3 = 2 + 2
// don't make code so tough
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study:prefix and postfix ++ on mdn 
// prefix :first increase the value and assign
*/
let x=3;
let y=++x
console.log(x,y);
// first value of x will be increased to 4 ,and then the incresed value of x will be assigned to y
let a=2;
let b= a++;
console.log(a,b)
// first value  of a will be assigned to b and then value of a will be increased to 3

/*link to study: for detailed explanation
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion */