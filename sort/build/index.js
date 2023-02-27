"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-4, -30, 111, 2]);
const sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
