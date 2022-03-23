import { Station } from "./Station";

export interface TrainLine {
    id: string;
    line: string;
    originStation: string;
    destinationStation: string;
    cssColor: string;
    stations: Station[];
}