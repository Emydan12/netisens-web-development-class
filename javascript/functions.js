
// functions is a block of reuseable code.
let score= prompt("enter your score:");


function greeting(){
    console.log('hello world');
    console.log('hello people');
    console.log('hello guys');
    console.log('hello girls');
}

greeting();
// greeting();
// greeting();
// greeting();

function addNum(){
    let num1 = 4;
    let num2 = 5;
    console.log( num1 + num2);
}
addNum();
addNum();

// when you declare a let variable inside a function ( you can acces it outside a function)
// when you declare a  var variable outside a function is a globally scope
// var variable declare inside a block has a function scope ( you cannot access it outside the block)
// var ( you can use it without declaring it)
 
// add parimeters to make it dynamic***(parameters eg: num1, num2) call the function using a number(argument eg: 5, 10)


// console.log(hoistedVar);// output : undefined
// var hoistedVar = "am hoisted";
// console.log(hoistedVar);// output: im hoisted

function example(){
    var x = 10;
    if(true){
        var y = 20;// block scope
        console.log(y); // 20
    }
    console.log(x);// 10
    console.log(y);//  error :undefined
}
example();
// example();

function substractNums( num1, num2){
return num1 - num2;
}
let result = substractNums(7,5);
// let result = addNum(7,5);
console.log( result);

// return  turn to a value
// you cannot use const to redeclare the same thing with the same variable name

//Arrow functions
// const substractNums(num1, num2) =>{
//     return num1 - num2;
// }  
// 







