import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppComponent } from "../app.component";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['../app.component.css']
})

export class FormularioComponent {
  title = "Envíame un mensaje y pronto me pondré en contacto contigo"

  fontColor = "white"
  position = "text-align:center"
  space = "padding:40px"

  public enviar: any = FormGroup;

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.enviar = this.formBuider.group({

    })
  }
  send(): any {

  }
most=false
  goprivacidad(){
    document.querySelector('.Bio')
    this.most=this.most
  }

}