import type { Series } from "./series";

export interface Track {
    id: number;
    
    imageUrl: string;
    name: string;
    country: string;
    distance: number;
    eventsCount: number;
    series: Series[];

    circuitPathUrl: string;
    circuitCornersUrl: string;
    descriptionPhotoUrl: string | null;
    description: string | null;
    coordinates: string | null;
    openedInYear: number | null;
    lapRecordTime: string | null;
    turnsCount: number | null;
    grandstandCapacity: number | null;

    galleryUrls: string[];
}