import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belen';
  color = "blue";

  mostrar: boolean = true

  hamburguesa() {
    this.mostrar = !this.mostrar

  }
 

}
