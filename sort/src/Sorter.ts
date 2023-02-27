import { NumbersCollection } from "./NumbersCollection";
export class Sorter {
    constructor(public collection: NumbersCollection) { }

    sort(): void {
        const lenght = this.collection.length;

        for (let i = 0; i < lenght; i++) {
            for (let j = 0; j < lenght - i - 1; j++) {

                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }

            }
        }
    }
}