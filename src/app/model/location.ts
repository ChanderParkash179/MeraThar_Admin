import { City } from "./city";

export interface Location {

    id?: number;
    name?: string;
    location?: string;
    description?: string;
    city?: City;
}
