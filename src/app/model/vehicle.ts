import { City } from "./city";

export interface Vehicle {

    id?: number;
    name?: string;
    price?: string;
    phone?: string;
    rating?: number;
    type?: string;
    transport?: string;
    city?: City;
}
