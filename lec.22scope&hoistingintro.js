/* in this lecture (22),2 topics were discussed :
(1)nested scope:how concept of  scopes works in nested loops,child can access parent function but parent can't access child component.
(2)hoisting:there are 2 ways in which function can be used,just declaring the function or storing function in a value.
if you are storing value in a var. of a function, you have to first declare function and then you can access function,in js DOM  decides which thing need to implemented which way,detail study in upcoming lectures.
*/
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //  console.log(website);
    // error:parent can't access child component,one():parent ,two():child 

     two()

}

one()

 if (true) {
  const username = "hitesh"
   if (username === "hitesh") {
       const website = " youtube"
       console.log(username + website);
   }
// console.log(website);
// error
}

//  console.log(username);
// error out of scope


//   ++++++++++++++++++ interesting ++++++++++++++++++
// just intro :will study in more detail

// no error
 /*
 console.log(addone(5))

function addone(num){
 return num + 1
}
*/

// will show error
/*
addTwo(5)
 const addTwo = function(num){
     return num + 2
 }
 */
