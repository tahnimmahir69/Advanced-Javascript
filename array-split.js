//OR 01. Vanga holo slice

// const nums =[1, 2, 3, 4, 5, 6, 7, 8];

// const part = nums.slice(2, 5);  // [slice] Array slice ar kaj hoccha [kata 2 vag kora] means index 2 thaka index 5 porjonto kata vag kora raka.
// console.log(part);
// console.log(nums);


// OR 02.kata fala holo splice

// const nums =[1, 2, 3, 4, 5, 6, 7, 8];

// const removed = nums.splice(2, 5);  //[splice ] ar kaj holo index 2 tjhaka 5 porjonto number sorai falba and main array ta baki array num. gula show korba

// console.log(removed);
// console.log(nums);


//OR  03. Jora holo join

// const nums =[1, 2, 3, 4, 5, 6, 7, 8];
// const removed = nums.splice(2, 5, 77, 02);  // Jodi main array num. a kono add korta chai tahola splice ar 2 nun. ar por ja bosba ta lika dita hoba

// console.log(removed);
// console.log(nums);

//OR

const nums =[1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 5, 77, 02);

// const together = nums.join (" ")  // join means array num. ar shata kono kicu jog kora
// console.log(together)

const together = removed.join(" ,")
console.log(together);