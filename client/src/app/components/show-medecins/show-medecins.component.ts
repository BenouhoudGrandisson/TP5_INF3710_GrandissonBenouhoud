import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../../../common/tables/doctor';

@Component({
  selector: 'app-show-medecins',
  templateUrl: './show-medecins.component.html',
  styleUrls: ['./show-medecins.component.css']
})
export class ShowMedecinsComponent implements OnInit {

  public readonly doctors: Doctor[] = [
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj"),
    new Doctor("wewe", "wewewe", "wewjewioejweioj", 23, "woliehj")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
