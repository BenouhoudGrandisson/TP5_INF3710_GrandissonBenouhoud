export class Doctor {
    firstname: string;
    lastname: string;
    specialty: string;
    experience: number;
    service: string;

    constructor(firstname: string, lastname: string, specialty: string, experience: number, service: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.specialty = specialty;
        this.experience = experience;
        this.service = service;
    }
}