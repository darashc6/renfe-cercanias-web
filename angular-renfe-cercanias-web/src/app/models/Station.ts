export interface Station {
    name: string;
    zone: number;
    additionalInfo?: string[];
    travelTimeToNextStation?: number;
    connectedLines: string[];
}