import { Fare } from "./Fare";
import { TrainLine } from "./TrainLine";

export interface RailNetwork {
    railNetworkId: string;
    name: string;
    fares: Fare[];
    trainLines: TrainLine[];
    contact: Contact[];
    address: string[];
}

export interface Contact {
    contactGroup: string;
    phoneNumber: string;
}