import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 1500,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return ( this.miFormulario?.controls.producto?.invalid &&
             this.miFormulario?.controls.producto?.touched )
  }

  precioValido():boolean{
    return ( this.miFormulario?.controls.precio?.value < 0 && 
             this.miFormulario?.controls.precio?.touched )
  }

  guardar(){
    console.log(this.miFormulario)
    console.log('posteo enviado')
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }



}
