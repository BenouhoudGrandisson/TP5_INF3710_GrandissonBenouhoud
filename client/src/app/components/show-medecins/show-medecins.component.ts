import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../../../../common/tables/medecin';

@Component({
  selector: 'app-show-medecins',
  templateUrl: './show-medecins.component.html',
  styleUrls: ['./show-medecins.component.css']
})
export class ShowMedecinsComponent implements OnInit {

  public readonly medecins: Medecin[] = [
    new Medecin(0, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(1, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(2, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(3, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(4, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(5, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(6, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(7, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(8, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Medecin(9, "wewe", "wewewe", "wewjewioejweioj", 23, "woliehj")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
