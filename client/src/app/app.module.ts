import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMedecinComponent } from './pages/add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './pages/update-medecin/update-medecin.component';
import { DeleteMedecinComponent } from './pages/delete-medecin/delete-medecin.component';
import { MedecinCardComponent } from "./components/medecin-card/medecin-card.component";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShowMedecinsComponent } from './components/show-medecins/show-medecins.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedecinComponent,
    UpdateMedecinComponent,
    DeleteMedecinComponent,
    MedecinCardComponent,
    MainPageComponent,
    ShowMedecinsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
