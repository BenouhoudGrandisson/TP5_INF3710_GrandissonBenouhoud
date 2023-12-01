import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/config/constants';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {
  public success: boolean = false;
  private readonly API_URL = Constants.API_URL;

  addMedecinForm: FormGroup;

  public specialties: string[];
  public services: string[];

  public submitForm() {
    console.log(this.addMedecinForm.value)
    this.http.post(this.API_URL + '/medecins', this.addMedecinForm.value).subscribe((res) => {
      console.log(res)
    });
    this.success = true;
  }

  get firstname() {
    return this.addMedecinForm.get('firstname');
  }

  get lastname() {
    return this.addMedecinForm.get('lastname');
  }

  get specialty() {
    return this.addMedecinForm.get('specialty');
  }

  get experience() {
    return this.addMedecinForm.get('experience');
  }

  get service() {
    return this.addMedecinForm.get('service');
  }


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.addMedecinForm = this.fb.group({
      firstname: ['Jean-Michel', [
        Validators.required,
        Validators.minLength(1)
      ]],
      lastname: ['Anctil', [
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

    this.http.get(this.API_URL + '/services').subscribe((services: string[]) => {
      this.services = services;
    });

    this.http.get(this.API_URL + '/specialties').subscribe((specialties: string[]) => {
      this.specialties = specialties;
    });
  }

}
