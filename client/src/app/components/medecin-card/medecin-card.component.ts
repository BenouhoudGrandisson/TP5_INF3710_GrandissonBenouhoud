import { Component, Input, OnInit } from '@angular/core';
import { Medecin } from '../../../../../common/tables/medecin'

@Component({
  selector: 'app-medecin-card',
  templateUrl: './medecin-card.component.html',
  styleUrls: ['./medecin-card.component.css']
})
export class MedecinCardComponent implements OnInit {

  @Input() medecin: Medecin;

  constructor() { }

  ngOnInit(): void {
  }

}
