// 2 methods for declaring objects:
// 1.literals :not singleton
// 2.constructor:singleton

// object literals:
// declaring object ,key:value, by default name will be taken as string 
const mysam =Symbol("mykey1");
// declared one symbol,syntax for adding 
const JSuser = {
    name:"priya",
    age:18,
    location:"jaipur",
    email:"priya@123.com",
    isloggedin:false,
    lastloginday:["monday","tuesday","wednesday"],
    "full name":"priya mina",
    [mysam]:"mykey1"
}
// consoling data in object,2 method>>
// console.log(JSuser.email);
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser.full name) can't be consoled this way

// interview question:declare one symbol ,add in object and console out 
// console.log(JSuser[mysam])
// console.log(typeof mysam)

// applying changes ,simplying using equals to
JSuser.email = "hem@2023.com"
// console.log(JSuser["email"])
// freezing:for no update
// Object.freeze(JSuser)
JSuser["full name"]="kashish sharma"
// console.log(JSuser["full name"]) no change
// functions in object
JSuser.greeting= function(){
    console.log("hello user")
}
console.log(JSuser.greeting())
JSuser.greetingtwo= function(){
    console.log(`hello js user,${this["full name"]}`)
}
// string interpolation:converting from string to backtics `
// this:for using same tackticks
console.log(JSuser.greetingtwo())