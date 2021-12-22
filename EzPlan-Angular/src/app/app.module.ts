import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TachesComponent } from './components/taches/taches.component';
import { TacheComponent } from './components/tache/tache.component';

@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    TacheComponent
  ],
  imports: [
    MatListModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
