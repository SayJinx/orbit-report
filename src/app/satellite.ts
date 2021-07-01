export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    //showWarning: boolean = false;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    showWarning(): boolean {
        return this.type==="Space Debris"
    }


 
}