// on the basis of how data is stored in the memory and can be accessed ,datatypes are divided into 2 types :
// 1.primitive:call by value(value copied and used further) 7:string,number,boolean,null,defined,symbol,BigInt
/* symbols are used for differentiation */
const id =Symbol('123')
const anotherid= Symbol('123')
// console.log(id===anotherid) false
/*BigInt:very large value */
const Bignumber = 123456123456123n;

//2.non-primitive:call by reference:array,objects,functions
//❓ js is staticly typed language or dynamically typed?
// ans:javaScript is a dynamically typed language. This means that variables do not have to be declared with a specific type, and their type can change at runtime.
var x=0;/*var have no type */
x="hello";/*values have types */
// console.log(x)/*var changes type dynamically */
// array:
const fruits=["mango","apple","banana"]
// objects:anything in curly braces 
let myobject=
{
    name:"hitesh",
    age:32,
}
// functions
let myfunction = function()
{
    console.log("hello world")
}

// 📍typeof :(pic in which it shows what is the actual typeof)
console.log(typeof(myobject)) 
// object function(only fuction will appear in console)
// ⚡note⚡:type of arr,object:object and type of function: function object

/*⭐📌interview purpose:
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
// ++++++++++++++++++++++++++++++++++++++++++"stack and heap memory"++++++++++++++++++++++
// stack:primitive and heap:for non-primitive
let youtubechannel = "hiteshchaudhary.com"
let anothername = youtubechannel
// call by value ,value is copied in stack and given to anothername 
anothername = "chaiorcode"
console.log(youtubechannel)
console.log(anothername)

let user1={
    email: "user@google.com" ,
    age:32,
}
let user2 = user1
// call by reference,original value is changed.
user2.email= "hitesh@google.com",
console.log(user1.email)
console.log(user2.email)