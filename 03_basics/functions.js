function saymyname(){
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a"); 
}
//  saymyname:refrence
// saymyname():execution

// function addtwonumbers(number1,number2)
// {
//     console.log(number1+number2)
// }

// addtwonumbers(800,1000)
// in this function ,num1,num2 are taken as no.s but it's possible that user might pass values which are not numbers so,we will be applying if-else here to check first that number1 ,number2 obtained are no.s
function addtwonumbers(number1,number2)
 {   
    // let result=number1+number2
//     return result
console.log("working")
return number1+number2
// console,log(working)
}
// console.log("result",addtwonumbers(8,5))

function loggedin(username="sam"){
    if(!username){
        console.log("please enter a valid username")
        return
    }
    return `${username} just logged in`
}
let username = "santosh"
// loggedin(username)
// no output as return value by the function is not visible
// console.log(loggedin())
// nothing passed as an argument :undefined 
// console.log(loggedin())
// undefined :!username/!undefined

// ⚡⚡lecture20:
// let's us suppose in a shopping cart new item is added ,we want to create a function for showing all the cart price
function addcartvalue(num1){
    return num1;
}
// console.log(addcartvalue(500,600,700))
// will only show first value that is500
function addcartvalue1(...num1){
    return num1;
}
// console.log(addcartvalue1(500,600,700))
// show arr =[500,600,700],using spread ...
// 📍INTERVIEW QUESTION:what will be the o/p for:
function addcartvalue2(value1,value2,...num1){
     return  value1,value2,num1;
    // return num1;
}
// console.log(addcartvalue2(500,600,700,80))
// [700,80]  return num1;
// console.log(addcartvalue2(500,600,700,80))
// [700,80]  return value1,value2,num1; 

function addcartvalue3(value1,value2,num1){
    //   return  value1,value2,num1;
    return num1;
//  value1,value2,num1;
}
// console.log(addcartvalue3(500,600,700,80))
// 700 return num1;  & return  value1,value2,num1;
// value1,value2,num1; 500

const cartobject= 
    {
        username:"raj",
        password:19,
        price:400
    }

function cartdisplay(anyobject){
    console.log(`the user named ${anyobject.username} with password ${anyobject.password} will pay ${anyobject.price}`
    )
}
// cartdisplay(cartobject)
// direct object passing
cartdisplay({
    username:"sam",
    password:"28",
    price:7000
})
// function on array:
const arr1=[5,10,15,20]
function returnsecondvalue(myarr){
    console.log(myarr[1])
}
// returnsecondvalue(arr1)
returnsecondvalue([5,10,15,20])

