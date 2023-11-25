//  singleton object due to constructor 
 const tinderuser = new Object();
tinderuser.id ="040";
tinderuser.name = "priya"


// 2.non singleton:no differance other than that
// const tinderuser ={};
// console.log(tinderuser);

const regularuser ={
    email:"minapriya@123.com",
fullname :{
    name:"kashi",
    age:"34",
    married:"true"
}
}
// console.log(regularuser.fullname.name)
// merging of objects
// const obj1= { 1:"a",2:"b"}
// const obj2= { 3:"c",4:"d"}
// const obj4= { 5:"a",6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
// const obj3 = Object.assign({}:target,all will be copied here,obj1,obj2,obj4: sources)
// console.log(obj3)

// spread object,⚡90% used :
// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)

/*KEYS,VALUES OF AN OBJ. WILL BE AN ARRAY ,WHICH MEANS WE CAN USE THIS IN MANY WAYS FOR LOOPING ETC.
*/
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// exist in object or not
// console.log(tinderuser.hasOwnProperty("name"))
// excessing values in object ,when there a lot of items in it 
const classece =[
{
    name:"student",
    id:"123"
} ,
{
    name:"student",
    id:"123"
} ,
{
    name:"student",
    id:"123"
} 
]
// console.log(classece[1].id)

// lec.(18)destructuring object:so that we don't have to right the long name again

const course ={
    coursename:"js",
    courseprice: "999"
}
// syntax const{object key:"name given by you"} = object ;
const {coursename:A} = course;
console.log(A)
// same concept of destructuring also use in react,{}

// api: json
{
    // "name":"hitesh"
    // key,value:string
}

[
    {},
    {}
]
// json formator for :study of json code