import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { AddMedecinComponent } from "../pages/add-medecin/add-medecin.component";
import { DeleteMedecinComponent } from "../pages/delete-medecin/delete-medecin.component";
import { UpdateMedecinComponent } from "../pages/update-medecin/update-medecin.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "addMedecin", component: AddMedecinComponent},
  { path: "deleteMedecin", component: DeleteMedecinComponent},
  { path: "updateMedecin", component: UpdateMedecinComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
