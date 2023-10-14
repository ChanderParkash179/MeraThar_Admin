import { City } from "./city";

export interface Hotel {

    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    rating?: number;
    city?: City;
}
