import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '..\TP5_INF3710_GrandissonBenouhoud\server\app\services\database.service.ts';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  addMedecinForm: FormGroup;
  private databaseService: DatabaseService

  public specialties: string[]

  public services: string[]

  public submitForm() {
    console.log(this.addMedecinForm.value)
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


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.services = this.databaseService.getAllServices();
    this.specialties = this.databaseService.getAllSpecialities();
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

  }

}
