function add(num1, num2){
   
    console.log(arguments);
    return num1 + num2 + arguments[2];
}

const result = add(2, 3, 5);
console.log(result);

//OR

function add(num1, num2){
    console.log([...arguments]);   ///{...} dila arument ar exrea part show korba na
    return num1 + num2 + arguments[2];
}

const result = add(2, 3, 5);
console.log(result);
