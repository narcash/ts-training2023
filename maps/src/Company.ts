import { faker } from 'faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
    companyName: string;
    catchPhrase: string;
    color: 'black'
    location: {
        lat: number;
        lng: number
    }
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    };
    markerContent(): string {
        return `
            <div>
                <h1>Company name: ${this.companyName}</h1>
                <h3>Company Cathphrase: ${this.catchPhrase} </h3>   
            </div>
        `;
    };
}