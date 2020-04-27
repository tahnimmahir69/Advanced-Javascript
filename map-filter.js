// const numbers = [3, 5,  5, 6, 7, 8];
// // const output = [];

// // for(let i=0; i< numbers.length; i++){
// //     const element = numbers[i];
// //     const result = element * element;
// //     output.push(result);
// // }
// console.log(output);

//OR
// element
// const numbers = [3, 5,  5, 6, 7, 8];
// function square (element){
//     return element * element;
// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

//OR

// const numbers = [3, 5,  5, 6, 7, 8];
// function square (element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

// console.log(result);

//  OR (Map)
// const square = element => element = element;
// const square = x => x * x ;

// const numbers = [3, 5,  5, 6, 7, 8];

// const result = numbers.map(x => x * x);

// console.log(result);

//OR (Filter)

const numbers = [3, 5,  5, 6, 7, 8];

const bigger = numbers.filter( x => x > 5);
console.log(bigger);


const loser = numbers.filter( x => x < 5);
console.log(loser);

//OR (Find) means Shorto ar por 1 ta ans.

const isThere = numbers.find(x => x > 5);

   console.log(isThere);




















