import { Station } from "./Station";

export interface TrainLine {
    trainLineId: string;
    lineName: string;
    originStation: string;
    destinationStation: string;
    stations: Station[];
}