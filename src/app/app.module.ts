import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicComponent } from './paginados/music.component';
import { FormularioComponent } from './paginados/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
