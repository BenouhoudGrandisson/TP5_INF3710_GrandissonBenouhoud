import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {

  updateMedecinForm: FormGroup;

  public readonly specialties: string[] = [
    "Mewoikjew",
    "weiouwhge",
    "weoikjweolj"
  ]

  public readonly services: string[] = [
    "Hôpital de Lachine",
    "Hôpital Fleury",
    "Institut de cardiologie de Montréal"
  ]

  public submitForm() {
    console.log(this.updateMedecinForm.value)
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
      medecinId: 1,
      firstname: "Jean",
      lastname: "Tremblay",
      specialty: "Mewoikjew",
      experience: 5,
      service: "Hôpital de Lachine"
    },
    {
      medecinId: 2,
      firstname: "Jean",
      lastname: "Tremblay",
      specialty: "weiouwhge",
      experience: 5,
      service: "Hôpital de Lachine"
    },
    {
      medecinId: 3,
      firstname: "Jean",
      lastname: "Tremblay",
      specialty: "weoikjweolj",
      experience: 5,
      service: "Hôpital de Lachine"
    }
  ]



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateMedecinForm = this.fb.group({
      medecinId: ['', [
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
    })
  }

}
