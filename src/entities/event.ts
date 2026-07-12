export interface Event {
    id: number;
    circuitPathUrl: string;
    name: string;
    distance: number;
    trackId: number;
    trackName: string;
    startDate: number;
    endDate: number;
    roundNumber: number;
    dateString: string;
    seriesString: 'Formula-1' | 'GT-3' | 'WEC';
    lapsCount: number; 
    seriesType: 'f1' | 'wec' | 'gt'
}