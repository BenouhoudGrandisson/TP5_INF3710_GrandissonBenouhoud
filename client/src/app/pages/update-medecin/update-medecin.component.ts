import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medecin } from '../../../../../common/tables/medecin';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  private readonly API_URL = Constants.API_URL;

  public showSuccessMessage: boolean;

  updateMedecinForm: FormGroup;
  
  public medecins: Medecin[];
  public specialties: string[];
  public services: string[];

  public submitForm() {
    this.http.patch(this.API_URL + '/medecins/' + this.updateMedecinForm.get('id')?.value, this.updateMedecinForm.value).subscribe((res) => {
      console.log(res)
    });
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




  constructor(private fb: FormBuilder, private http: HttpClient) { }

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

    this.http.get(this.API_URL + '/services').subscribe((services: string[]) => {
      this.services = services;
    });

    this.http.get(this.API_URL + '/specialties').subscribe((specialties: string[]) => {
      this.specialties = specialties;
    });

    this.http.get(this.API_URL + '/medecins').subscribe((medecins: Medecin[]) => {
      this.medecins = medecins;
    });
  }

}
