
class Sorter {
    // collection: number[];

    // constructor(collection: number[]) {
    //     this.collection = collection
    // }
    constructor(public collection: number[]) { }

    sort(): void {
        const lenght = this.collection.length;

        for (let i = 0; i < lenght; i++) {
            for (let j = 0; j < lenght - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}

const sorter = new Sorter([-4, -3, 11, 2]);
sorter.sort();
console.log(sorter.collection);
