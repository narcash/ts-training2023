const colors = ['red', 'green', 'yellow'];

const dates = [new Date(), new Date()];
const fruitsByColor = [
    ['tomato'],
    ['green'],
    ['lemon']
];

const fruitByColor1: string[][] = [];

//*** Help with infference when extracting values */

const color = colors[0];
const color1 = colors.pop();

//*** Prevent incompatible values */
// colors.push(true);

//*** Help with 'map' */

colors.map((color: string): string => {
    return color.toLocaleUpperCase();
})

//*** Flexible types */ 

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2022');
importantDates.push(new Date());
// importantDates.push(1);


