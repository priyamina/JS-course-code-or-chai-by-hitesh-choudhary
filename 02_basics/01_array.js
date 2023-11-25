/* array:storing a collection of multiple items under a single variable name
1️⃣JavaScript arrays are resizable and can contain a mix of different data types.
2️⃣JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings. 
3️⃣JavaScript arrays are zero-indexed: 
4️⃣JavaScript array-copy operations create shallow copies[call by refrence].
*/
// declaration of array:(1)
const myarr =[1, 2 ,3,4,5]
// console.log(myarr[0])
// (2)
const foodarr=new Array("noodles","chapati","kajukatli")
// console.log(foodarr.concat("sabji","ladoo"))
// array methods:
myarr.push(6);
// console.log(myarr)
myarr.pop()
//  console.log(myarr)
 myarr.unshift(9)
//  unshift:
//  console.log(myarr)
// shift 0 index element and replaces with given value and shift is just opp.
// in shift if unshift is not there ,it will going to remove 0th index element
myarr.shift()
// console.log(myarr)
// console.log(myarr.includes(9))
// includes :false or true [boolean value]
//console.log(myarr.indexOf(2))
const newarr = myarr.join();
console.log(myarr)
console.log(newarr)  
console.log(typeof(newarr))
// join():converts all the elements of an array into string ,type of:string
// 2 imp. methods of arr.[📌interview⚡⚡⚡⚡⚡]
/*slice:[call by value]items from original arr are copied into new arr 
splice:items from the original array are moved form old arr to new arr. (old arr get modified) [call by refrence]
*/
let a =myarr.slice(2,4);
console.log(a);
myarr.push(8,9,10,11)
let b= myarr.splice(2,4)
console.log(b)
console.log(myarr)
