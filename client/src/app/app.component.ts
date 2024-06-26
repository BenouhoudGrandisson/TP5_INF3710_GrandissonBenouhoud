import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medecin } from "../../../common/tables/medecin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    public route: string;

    public constructor(location: Location, router: Router) {
        router.events.subscribe((_val: any) => {
            if (location.path() !== "") {
              this.route = location.path();
            } else {
              this.route = "";
            }
          });
    }

    public readonly title: string = "INF3710 TP4";
    public readonly doctorTest: Medecin = new Medecin(0, "Arnaud", "Grandisson", "La teub", 69, "Hopital General de MTL");
    public ngOnInit(): void { }
}
