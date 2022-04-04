export interface Fare {
    fareId: string;
    fareDescription: FareDescription;
    prices?: FarePrices[];
}

export interface FareDescription {
    title: string;
    subtitle: string;
    content: string[];
}

export interface FarePrices {
    n_zones: number;
    price: number;
}