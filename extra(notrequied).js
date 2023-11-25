//➡️ NAMING VARIABLES: RULES AND BEST PRACTICES 
/*
📌The first character must be a letter or an underscore (_) or an dollar($). You can't use a number as the first character. 
📌The rest of the variable name can include any letter, any number, or 
the underscore. Can't use any other characters, including spaces. 
📌Variable names are case sensitive. 
📌No limit to the length of the variable name. 
📌You can't use one of JavaScript's reserved words as a variable name. 
*/
// var 1thapa_the="vinod"❌
// console.log(1thapa_the)

// ➡️data types in js:
/*Six Data Types that are primitives, 
undefined : typeof instance === "undefined" 
Boolean : typeof instance "boolean" 
Number : typeof instance "number" 
String : typeof instance "string" 
Biglnt : typeof instance "bigint" 
Symbol : typeof instance "symbol" 
*/

/*var MYname = "priya mina"
console.log(typeof(MYname))
*/
// type of operator:
/*var MYage= 19;
console.log(typeof(MYage))
console.log(MYage)
Number datatype
*/
// Boolean:
/*var MYage =true
console.log(MYage)
console.log(typeof(MYage))
*/
// challenge time:2
/*
console.log(10+"20")
// console.log(9-"5") bug in java
console.log("java"+"script")
console.log(" "+" ")
console.log(" " +0)
console.log("vinod"+"thapa")
 console.log("vinod"-"thapa")
// NaN not a number:when two strings are -
// true=1,false=0
console.log(true+true)
console.log(true+false)
console.log(false+true)
console.log(false-true)
*/
// 📍interview question:Q.(1)diff. between null and undefined?
// ans:
// null:Null is basically an assignment value given to a variable. The variable which has been assigned as null contains no value.
/*var Iamuseless = null;
console.log(Iamuseless);
console.log(typeof(Iamuseless));
null is an object in JS:⭐2nd bug in JS
var youareuseless ;
// undefined:undefined means "not defined". So we declare a variable but do not assign a value to it, the variable becomes undefined.
console.log(youareuseless);
console.log(typeof(youareuseless));
*/
// 📍interview question:Q.(2)What is NaN?ans:
// NaN is a property of global object.in other words,it is a variable in global scope and the initial value of NaN :not a number.
 /*var myphonenumber = 987654321;
//  var username = "priya"
var username = 895623
 console.log(isNaN(myphonenumber))
 console.log(isNaN(username))
 if(isNaN(username)){
    console.log("please enter a valid no.")
 }
 else 
 {
    console.log("correct no.")
 }
*/
/*NaN=== NaN; 
Number.NaN ===NaN;
isNaN(NaN); 
 isNaN(Number.NaN); 
Number.isNaN(NaN); 
*/

// ⚡💀⚡:????doubt???????
// console.log(NaN=== NaN):false
// console.log(Number.NaN ===NaN)
// console.log(isNaN(NaN))
// console.log(isNaN(Number.NaN))
// console.log(Number.isNaN(NaN))











