export interface Ticket {
    originStation: string;
    destinationStation: string;
    railNetworkName: string;
    type: string;
    price: number;
    dateBought: number;
}