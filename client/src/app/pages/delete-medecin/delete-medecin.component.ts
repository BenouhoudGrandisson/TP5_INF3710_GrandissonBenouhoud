import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../../../../common/tables/medecin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-medecin',
  templateUrl: './delete-medecin.component.html',
  styleUrls: ['./delete-medecin.component.css']
})
export class DeleteMedecinComponent implements OnInit {
  deleteMedecinFormGroup: FormGroup;
  public readonly medecin: Medecin = new Medecin(0, "Mehdi", "Benouhoud", "La bite", 10, "La biterie");
  public readonly medecins: Medecin[] =  [
    new Medecin(1, "Mehewewdi", "Benouhoud", "La bite", 10, "La biterie"),
    new Medecin(2, "Mehewewdi", "Benwewewouhoud", "La bite", 10, "La biterie"),
    new Medecin(3, "Mehdi", "Benouwewewewhoud", "La bite", 10, "La biterie"),
    new Medecin(4, "Mehdi", "Benou34567houd", "La bite", 10, "La biterie")
  ];

  get id() { return this.deleteMedecinFormGroup.get('id'); }
  get medecinForm() { return this.deleteMedecinFormGroup.get('medecin'); }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.medecin);
    this.deleteMedecinFormGroup = this.fb.group({
      id: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      medecin: ['', [
        Validators.required
      ]]
    });
    this.deleteMedecinFormGroup.get('id')?.valueChanges.subscribe((selectedMedecinId) => {
      const selectedMedecin = this.medecins.find(medecin => medecin.id === selectedMedecinId);
      if (selectedMedecin) {
        this.deleteMedecinFormGroup.get('medecin')?.setValue(selectedMedecin);
      }
    });
  }

}
