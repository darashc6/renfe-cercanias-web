export interface User {
    firstName: string;
    firstSurname: string;
    secondSurname?: string;
    phoneNumber: string;
    nationality: string;
    idNumber: string;
    birthDate: string;
    email: string;
    password: string;
    address: Address;
}

interface Address {
    addressName: string;
    addressNumber: number;
    addressExtras?: string;
    province: string;
    municipality: string;
    postalCode: string;
}