import { User } from "./User";
import { Company } from './Company';

// instructions to other classes how be an argument for 'addMarker'
interface IMappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(mapDivId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId) as HTMLMapElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    addMarker(mappable: IMappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }
    //***/
    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     })
    // }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}