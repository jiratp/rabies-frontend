import { AnimalOwnerProfile, AnimalInformation } from './animal.information.model';

export interface RoundAnimalOwnerGroup {
    roundID;
    roundName;
    roundStartDate;
    roundEndDate;
    roundStatus;
}

export interface OwnerInfomationGroup {
    animalOwnerProfile: AnimalOwnerProfile[];
}

export interface RoundAnimalNoOwnerGroup {
    roundID;
    roundName;
    roundStartDate;
    roundEndDate;
    roundStatus;
}



