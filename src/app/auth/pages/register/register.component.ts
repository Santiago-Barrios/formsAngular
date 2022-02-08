import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { nameLastNamePattern, emailPattern, canNotBeStrider } from '../../../shared/validator/validaciones'
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miformulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validator.nameLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validator.emailPattern)], [this.emailVs]],
    username: [ '', [Validators.required, this.validator.canNotBeStrider ] ],
    password: [ '', [Validators.required, Validators.minLength(6) ] ],
    confirmPassword: [ '', [Validators.required ] ],
  },{
    validators: [ this.validator.sameFields( 'password', 'confirmPassword' ) ]
  });

  get emailErrorMsg(){

    const error = this.miformulario.get('email')?.errors;

    if(error?.required ){
      return 'El correo es obligatorio'
    }else if ( error?.pattern ){
      return 'No es un formato valido para un correo'
    }else if(error?.existEmail){
      return 'El correo ya existe';
    }
    return 'ni idea porque falla';
  }

  constructor(private fb: FormBuilder,
              private validator: ValidatorService,
              private emailVs: EmailValidatorService) { }
  
  ngOnInit():void {
    this.miformulario.reset({
      name: 'juan david',
      email: 'test1@test.com',
      username: 'SantiBRS',
      password: '123456',
      confirmPassword: '123456',
    });
  }

  validNoField( field: string ){
    return ( this.miformulario.controls[field]?.touched && 
             this.miformulario.controls[field]?.errors )
  }

  // emailRequired( ){
  //   return ( this.miformulario.get('email')?.touched && 
  //            this.miformulario.get('email')?.errors?.required )
  // }

  // emailPattern( ){
  //   return ( this.miformulario.get('email')?.touched && 
  //            this.miformulario.get('email')?.errors?.pattern )
  // }

  // emailTaken( ){
  //   return ( this.miformulario.get('email')?.touched && 
  //            this.miformulario.get('email')?.errors?.existEmail )
  // }

  create(){
    if(this.miformulario.invalid){
      this.miformulario.markAllAsTouched()
      return;
    }
    console.log(this.miformulario.value)
  }

}
