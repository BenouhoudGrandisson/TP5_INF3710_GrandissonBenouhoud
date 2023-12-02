import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../../../../common/tables/medecin';
import { Constants } from 'src/app/config/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-medecins',
  templateUrl: './show-medecins.component.html',
  styleUrls: ['./show-medecins.component.css']
})
export class ShowMedecinsComponent implements OnInit {

  private readonly API_URL = Constants.API_URL;

  public medecins: Medecin[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.API_URL + '/medecins').subscribe((medecins: Medecin[]) => {
      this.medecins = medecins;
    });
  }

}
