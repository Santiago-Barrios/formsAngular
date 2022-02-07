import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // formulario: FormGroup = new FormGroup({
  //   name       : new FormControl('RTX 4080ti'),
  //   price      : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  formulario: FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)] ],
    price: [ , [Validators.required, Validators.min(0)] ],
    existencias: [  , [Validators.required, Validators.min(0)] ],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.formulario.reset({
        name:'RTX 4080ti',
        price: 1600,
      })
  }

  fieldNoValid(field:string){
    return this.formulario.controls[field].errors && 
            this.formulario.controls[field].touched
  }

  save(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value);
    this.formulario.reset();
  }

}
