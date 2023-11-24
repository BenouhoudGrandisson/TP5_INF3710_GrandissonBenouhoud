import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../../../../../common/tables/doctor'

@Component({
  selector: 'app-medecin-card',
  templateUrl: './medecin-card.component.html',
  styleUrls: ['./medecin-card.component.css']
})
export class MedecinCardComponent implements OnInit {

  @Input() doctor: Doctor;

  constructor() { }

  ngOnInit(): void {
  }

}
