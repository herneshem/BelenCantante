import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicComponent } from './paginados/music.component';
import { FormularioComponent } from './paginados/formulario.component';
import { stylemusicComponent } from './paginados/stylemusic.component';
import { SpiritmusicComponent } from './paginados/spiritmusic.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrivacidadComponent } from './paginados/privacidad.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    FormularioComponent,
    stylemusicComponent,
    SpiritmusicComponent,
    PrivacidadComponent,
   


  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
