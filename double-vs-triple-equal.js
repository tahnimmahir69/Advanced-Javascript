//[ == ] means Only value cheek.
//& [ === ](Compaire korar jonno)  means  Value and type cheek.

const first = 2;
const second = "2"
if (first == second){            //01.true
    console.log("condition true");
}
else{
    console.log("condition false")
}

OR
// const first = 2;
const second = "2"
if (first === second){               //02.false
    console.log("condition true");
}
else{
    console.log("condition false")
}

OR

const first = 2;
const second = true;                    //03.false
if (first == second){
    console.log("condition true");
}
else{
    console.log("condition false")
}

OR

const first = 1;
const second = true;                        //04.true
if (first == second){
    console.log("condition true");
}
else{
    console.log("condition false")
}

OR

const first = 0
const second = false;                       //05.true and if we set 1 then  output is false
if (first == second){
    console.log("condition true");
}
else{
    console.log("condition false")
}

OR

const first = 0;
const second = false;
if (first === second){                           //06.false (compare korar jonno)
    console.log("condition true");
}
else{
    console.log("condition false")
}
































