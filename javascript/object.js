// object is used to group a related data in key value pairs

const myFirstOrder ={
    name: 'toyota camry',
    price: 22000,
    color: 'blue',
    year: 2020,
    mileage: 100000,
    features: ['auto start', 'bluetooth', 'led headlights'],
    isElectric: false,
    isAvaliable: true,
    engine:{
        type: 'v6',
        capacity:{
            obj1:{
                vaule: 2.5,
                unit: 'obj-1 liters'
            }
        },
        obj2:{
            value: 2.5,
        unit: ' obj-2 liters'
        }
    },
    drive: function(carname){
        console.log(carname + 'vrooooooom...');
    }
    
}

console.log(myFirstOrder.name);
console.log(myFirstOrder.engine.capacity);
console.log(myFirstOrder ['color']);
console.log(myFirstOrder ['engine']['horsepower']);

// myFirstOrder.drive('toyota');

let myNewCar = {}
console.log( myNewCar);
myNewCar.name = 'mercedes'
myNewCar['model'] = 'benz';
console.log( myNewCar);
console.log( myNewCar.name);


// use Dot notation example: ( console.log(myFirst.name))
// use Bracket notation example( console.log (myFirst['color']))
// use  Nested bracket notation example( console.log (myFirst['color']['horsepower']))


// a method is a fuction found inside an object example drive: function(){
// console.log('vroooooooooom'); OR myFirst
// }



// Object destructuring 
const engine = myFirstOrder.engine.capacity;
// const engine = myFirstOrder.engine;
console.log( engine);

const mileage = myFirstOrder
console.log(mileage.mileage);

const {capacity} = myFirstOrder
console.log(engine);

// const { engine: { capacity : { obj2: {unit}} }} = myFirstOrder


