import { City } from "./city";

export interface Restaurant {
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    rating?: number;
    city?: City;
}
