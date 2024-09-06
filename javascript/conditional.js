// conditonals are used to perform difft ctions based on difft conditions.

// if statement:
// if (conditinal){
// code to execute if condition is true 
// }
// let password = '12345678'
// if (7<2){
//     console.log('condition valid');
// }else{
//     console.log( 'condition invalid');
// }
// // let password = '12345678'

// if (password== '12345678'){
//     console.log('logged in successfully');
// }else{
//     console.log( ' invalid credintial');
// }

alert('i love coding');
// storing user input and score in a variables
let score= prompt("enter your score:");
// console.log('score before trimming': + score);
// console.log('score after trimming': + score.length);

// remove any leading or trailing whitespace from the score
//  score = score.trim();
// console.log('score before trimming:'+ score);
// console.log('score after trimming:' + score.length);

// check if score is greater than 0
// if(score.length > 0 && !isNaN(score)){

// }
// convert score to a number
// score = Number(score);
// console.log('score after converting to number: ' + score);

// if(score >=70){
    // console.log('congratulation , you scored an A');
// }else if( )
// let scored ;

// if (score>100){ 
    // console.log('invalid score');
// }
// if( score>0){
    // console.log('invalid score');
// }
// if( score!=0 ||score!=100 ){
// }if(scored >=70){
//     console.log(` congratulation you scored ${score}, you have an A` );
// }else if( score >=60){
//     console.log(` congratulation you scored ${score} you have B`);
// } else if( score > 50){
//     console.log(`congratulation you scored ${score} you have c`);
// }else if( score > 45){
//     console.log(`congratulation you scored ${score} you have D`);
// }else {
//     console.log(`congratulation you scored ${score} you have F`);
// } 
// console.log('Invalid input');

 
// // displaying the score in the console
// console.log({score});

// console.log('length check b4 trim: ' + score.length);

// console.log(score.trim() !== '');

// let score =prompt('please enter your score:');

// console.log({score});

// console.log('length check:' + score.lenhth);
// console.log('number check:' + isNaN("pen"));

// const car = [" ferrari", "jeep", "ram1500", "bmw", "nissan", "tesla", "lexus", "mercedes", "toyota", "honda"];
  
// console.log(car[0]);
// console.log(car[1]);
// console.log(car[2]);
// console.log(car[3]);
// console.log(car[4]);
// console.log(car[5]);
// console.log(car[6]);
// console.log(car[7]);
// console.log(car[8]);
// console.log(car[9]);
// console.log(car[10]);

// alert('car inventory');
// const carRequest = prompt("what type of car do you want to purchase?:");


// Define the buyer's list of requested car names
// let carBrands = ['Toyota', 'BMW', 'Chevrolet', 'Porsche', 'Hyundai'];

// Create a function to check car availability based on the request


// function checkCarAvailability(inventory, request) {
//     request.forEach(requestedCar => {
//         // Find the car in the inventory
//         const car = inventory.find(car => car.name === requestedCar);
//         if (car) {
//             if (car.available) {
//                 console.log(`${car.name} is available for purchase.`);
//             } else {
//                 console.log(`${car.name} is not available for purchase.`);
//             }
//         } else {
//             console.log(`${requestedCar} is not in the inventory.`);
//         }
//     });
// }

// Call the function with the inventory and buyer's request
// checkCarAvailability(carBrands, buyerRequest);

let num = 2 + 5;
switch (num){
    case 7:
        console.log('seven');
        break;
    case 4: 
        console.log('four'); 
    default:
        console.log('invalid number');
}

let word1 = 'happy';
let word2 = 'birthday';
let word3 = 'bassey';

// string concatination method
console.log( word1 + '' + word2 + '' + word3);
console.log('merry' + " " + 'christmas');

let word4 = 'good';
let word5 = 'day';
let word6 = 'bro';

// string concatination 
console.log(`${word4} ${word5} ${word6} nathandiel`);

