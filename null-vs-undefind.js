let travel;                   // 01. undefined
console.log(travel);

OR

function add(num1, num2){    //02.Undefined
    console.log(num1 + num2);
    return
}
const result = add(13, 82);
console.log(result);

OR

function add(num1, num2){
    console.log(num1, num2);
}
const result = add(13);         //03. undefined   =>num2 ar value na thaker karona
console.log(result);

OR

const premik = {name:"smart dude", phone: 455464};
console.log(premik.gf);             //04. Undefined   => jahato gf ar condition dawa nai

//OR

let fun = undefined;
console.log(fun);                       //05. Undefined

//OR

let ages = [2, 5, 9]                    //06. Undefined
console.log(ages[11]);













