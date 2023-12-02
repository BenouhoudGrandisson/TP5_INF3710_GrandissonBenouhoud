import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../../../../common/tables/medecin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/config/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-medecin',
  templateUrl: './delete-medecin.component.html',
  styleUrls: ['./delete-medecin.component.css']
})
export class DeleteMedecinComponent implements OnInit {
  private readonly API_URL = Constants.API_URL;
  deleteMedecinFormGroup: FormGroup;
  public medecin: Medecin;
  public medecins: Medecin[];
  public showSuccessMessage: boolean = false;

  get id() { return this.deleteMedecinFormGroup.get('id'); }
  get medecinForm() { return this.deleteMedecinFormGroup.get('medecin'); }

  submitForm() {
    console.log("Delete medecin");
    this.http.delete(this.API_URL + '/medecins/' + this.id?.value).subscribe((res) => {
      console.log("Medecin deleted");
    });
    this.showSuccessMessage = true;
  }
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.deleteMedecinFormGroup = this.fb.group({
      id: [0, [
        Validators.required,
        Validators.minLength(1),
        Validators.min(0),
        (control: any) => Validators.max(this.medecins ? this.medecins.length - 1 : 0)(control)
      ]],
      medecin: ['', [
        Validators.required
      ]]
    });
    this.deleteMedecinFormGroup.get('id')?.valueChanges.subscribe((selectedMedecinId) => {
      this.medecin = this.medecins.find(medecin => medecin.id === selectedMedecinId)!;
      this.medecinForm?.setValue(this.medecin);

      this.http.get(this.API_URL + '/medecins/' + selectedMedecinId).subscribe((res) => {
        this.medecin = res as Medecin;
        this.medecinForm?.setValue(this.medecin);
      });
    });

    this.http.get(this.API_URL + '/medecins').subscribe((res) => {
      this.medecins = res as Medecin[];
      this.medecin = this.medecins[0];
    });
  }

}
