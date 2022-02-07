import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    notifications: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  person = {
    gender: 'F',
    notifications: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
      this.formulario.reset( {
        ...this.person,
        condiciones: false
      });

      this.formulario.valueChanges.subscribe( ({ condiciones, ...rest })=> {
        // delete form.condiciones;
        this.person = rest;
      } );

      // this.formulario.get('condiciones')?.valueChanges.subscribe( cond =>{
      //   console.log(cond)
      // } );
  }

  save(){

    // this.person = {
    //   gender: this.formulario.controls.gender.value,
    //   notifications: this.formulario.controls.notifications.value
    // }
    const formValue = { ...this.formulario.value }
    delete formValue.condiciones;

    this.person = formValue;

  }

}
