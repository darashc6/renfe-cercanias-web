export interface Station {
    name: string;
    additionalInfo: string[];
    travelTimeToNextStation?: number;
    connectedLines?: string[];
}