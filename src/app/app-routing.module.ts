import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrivacidadComponent } from './paginados/privacidad.component';

const routes: Routes = [
  { path: 'privacidad', component: PrivacidadComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)   
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
