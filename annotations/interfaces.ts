interface IReportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name} was made in ${this.year}.`
    }
};
const cola = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Cola: ${this.color} has ${this.sugar} grams of sugar.`
    }
}
const printReport = (item: IReportable): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(item.summary());
}


printReport(oldCivic);
printReport(cola);