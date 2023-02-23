import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([-4, -30, 111, 2])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
