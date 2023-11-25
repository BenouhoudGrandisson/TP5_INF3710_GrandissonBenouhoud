import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
