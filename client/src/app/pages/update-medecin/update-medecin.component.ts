import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {

  public showSuccessMessage: boolean;

  updateMedecinForm: FormGroup;

  public readonly specialties: string[] = [
    "Mewoikjew",
    "weiouwhge",
    "weoikjweolj",
    "Analyse éditoriale et politique",
    "Commentateur politique",
    "Ministre de l'Économie et de l'Innovation"
  ]

  public readonly services: string[] = [
    "Hôpital de Lachine",
    "Hôpital Fleury",
    "Institut de cardiologie de Montréal",
    "C A Vous",
    "Radio-Canada",
    "Gouvernement du Québec"
  ]

  public submitForm() {
    // replace this with a call to the API evantually
    const medecinId = this.updateMedecinForm.get('id')?.value;
    const medecinIndex = this.medecins.findIndex(medecin => medecin.id === medecinId);
    this.medecins[medecinIndex] = this.updateMedecinForm.value;
    this.showSuccessMessage = true;
  }

  get id() {
    return this.updateMedecinForm.get('id');
  }

  get firstname() {
    return this.updateMedecinForm.get('firstname');
  }

  get lastname() {
    return this.updateMedecinForm.get('lastname');
  }

  get specialty() {
    return this.updateMedecinForm.get('specialty');
  }

  get experience() {
    return this.updateMedecinForm.get('experience');
  }

  get service() {
    return this.updateMedecinForm.get('service');
  }

  get medecinId() {
    return this.updateMedecinForm.get('medecinId');
  }

  public readonly medecins = [
    {
      id: 1,
      firstname: "Patrick",
      lastname: "Cohen",
      specialty: "Analyse éditoriale et politique",
      experience: 5,
      service: "C A Vous"
    },
    {
      id: 2,
      firstname: "Patrice",
      lastname: "Roy",
      specialty: "Commentateur politique",
      experience: 5,
      service: "Radio-Canada"
    },
    {
      id: 3,
      firstname: "Pierre",
      lastname: "Fitzgibbon",
      specialty: "Ministre de l'Économie et de l'Innovation",
      experience: 5,
      service: "Gouvernement du Québec"
    }
  ]



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.showSuccessMessage = false;
    this.updateMedecinForm = this.fb.group({
      id: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      firstname: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      lastname: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      specialty: ['', [
        Validators.required,
        Validators.pattern('^(?!Choisir\\.\\.\\.$).*$')
      ]],
      experience: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      service: ['', [
        Validators.required,
        Validators.pattern('^(?!Choisir\\.\\.\\.$).*$')
      ]]
    });

    this.updateMedecinForm.get('id')?.valueChanges.subscribe((selectedMedecinId) => {
      const selectedMedecin = this.medecins.find(medecin => medecin.id === selectedMedecinId);
      if (selectedMedecin) {
        this.showSuccessMessage = false;
        this.updateMedecinForm.get('firstname')?.setValue(selectedMedecin.firstname);
        this.updateMedecinForm.get('lastname')?.setValue(selectedMedecin.lastname);
        this.updateMedecinForm.get('specialty')?.setValue(selectedMedecin.specialty);
        this.updateMedecinForm.get('experience')?.setValue(selectedMedecin.experience);
        this.updateMedecinForm.get('service')?.setValue(selectedMedecin.service);
      }
    });
  }

}
