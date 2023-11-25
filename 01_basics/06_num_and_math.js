const score = 100;
// already detected value as number by js
// console.log(score)
/*console.log(score.toString())
console.log(score.toFixed(3))
*/
// but if we explictly/forcefully try to give value as number
// const newscore =new Number(102)
/*
console.log(newscore)
console.log(newscore.toString())
console.log(newscore.toString().length)
console.log(newscore.toString().charAt(1))
// in many applications ,where we have to show the final amount including gst and all ,we use toFixed method 
console.log(newscore.toFixed(2))
*/
/*
const hundreds= 1000;
console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))
// consoling 0s acc. to indian system
*/
/*
const anothernum = 123.586
console.log(anothernum.toPrecision(6))
console.log(anothernum.toPrecision(5))
console.log(anothernum.toPrecision(4))
console.log(anothernum.toPrecision(3))
console.log(anothernum.toPrecision(2))
console.log(anothernum.toPrecision(1))
*/

// very important from interview point of view:precise/accurate value upto the given digit
/*
const anothernum1 = 4.0560;
console.log(anothernum1.toPrecision(4))
console.log(anothernum1.toPrecision(3))
console.log(anothernum1.toPrecision(2))
console.log(anothernum1.toPrecision(1))
*/
// 2 properties of Number: (1)Number.MAX_VALUE (2)Number.MIN_VALUE
//++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++//
// console.log(Math);
// object
/*console.log(Math.abs(-4))
console.log(Math.round(4.2))
console.log(Math.round(4.6))
console.log(Math.floor(4.6))
console.log(Math.ceil(4.2))*/
// console.log(Math.random())
// random value between 0 -1
// console.log(Math.random()*10) 
// range increses ,from 0.666 to 6.66 
/*console.log(Math.floor(Math.random()*10) + 1)
// not getting 0 ,min. 1 value 
console.log(Math.floor(Math.random()*10) + 1)
*/
// ⚡⚡⚡⚡⚡⚡IMP.TRICK⚡⚡⚡⚡⚡⚡⚡⚡
const max =20;
const min =10;
console.log(Math.floor(Math.random()*(max-min+1)) + min)
// ⭐⭐⭐⭐⭐⭐⭐📌need to remember📌📌⭐⭐⭐⭐⭐⭐⭐
