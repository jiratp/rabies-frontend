export interface AnimalOwnerProfile {
    animalOwnerID;
    customerName;
    customerIDCard;
    corporationName;
    corporationTaxID;
    addressNo;
    mooName;
    streetName;
    districtName;
    zipCode;
    placeID;
    soiName;
    provinceName;
    subDistrictName;
    phoneNumber;
    animalInformation: AnimalInformation[];
}

export interface AnimalInformation {
    animalInfoID;
    animalOwnerID;
    identity;
    color;
    species;
    gender;
    vaccinationHistoryFlg;
    vaccinationLastDate;
    sterilizationFlg;
    yearAge;
    monthAge;
}
