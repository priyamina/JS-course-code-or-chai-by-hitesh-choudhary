const marvel_hero =["thor","spiderman","ironman"]
const dc_heros=[
    "superman","flash","batman"
]
// marvel_hero.push(dc_heros);
// 1️⃣push():pushes in given original arr
 console.log(marvel_hero)

//  2️⃣concat:combining 2 arrays ,and make new array
const my_all_heros =
marvel_hero.concat(dc_heros)
console.log(my_all_heros)


// 3️⃣unspread:water glass breaks and spreads,sabko alg alg karke spread kardega in new arr
//  const my_all_heros=[...marvel_hero,...dc_heros]
//  console.log(my_all_heros)
const another_arr =[1,2,3,[4,5],6,7,[8,9,[10,11]]]
// flat:for combining entire array including subarray and returnig a new arr
const my_another_arr = another_arr.flat(2)
// depth:no. of arr you want to open up in new arr
console.log(my_another_arr)
// for safer side :infinity
const my_another_arr2 = another_arr.flat(Infinity)
console.log(my_another_arr2)
/*convertion to array:
Array.from:convert arr
Array.of: converting from a set of elements
*/
console.log(Array.isArray("hitesh"))
// whether it's an arr or not
console.log(Array.from("hitesh"))
// console.log(Array.from({name:"hitesh"}))
// empty arr :not able to convert
const score1= 100;
const score2=200;
const score3=300;
// console.log(Array.of(score1,score2,score3))

