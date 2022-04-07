export interface CustomerServiceFormData {
    railNetworkName: string;
    petitionType: string;
    firstName: string;
    firstSurname: string;
    secondSurname?: string;
    email: string;
    phoneNumber?: string;
    comment: string;
}