
const orangesN: number = 5;

let oranges: number = 5;
let speed: string = 'fast';
let hasDog: boolean = true;

let nothing: null = null;
let nothing1: undefined = undefined;


//*** built-in objects
let now: Date = new Date();

//*** Array
let colors: string[] = ['red', 'blue', 'black'];
let numbers: number[] = [1, 2, 3, 4];
let results: boolean[] = [true, false, true];

//*** Classes

class Car {

}
let car: Car = new Car();

//*** Object literal

let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

//*** Functions

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


//*** When to use type annotations
// 1 - Functions returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

// 2 - When we declare a variable on one line and initialize it later
let words = ['one', 'two', 'three'];
let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'two') {
        isTwo = true;
    }
}
// 3 - variables whoes type can't be inferred
let myNumbers = [-10, -1, 12];
let positiveNumber: boolean | number = false;
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > 0) {
        positiveNumber = myNumbers[i]
    }
}