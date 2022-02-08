import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public nameLastNamePattern: string = "([a-zA-Z]+) ([a-zA-A]+)";
public emailPattern       : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  canNotBeStrider (control:FormControl): ValidationErrors | null {
    const value = control.value.trim().toLowerCase();
    if( value === 'strider' ){
      console.log(value)
      return {
        noStrider: true,
      }
    }
    return null;
  }

  sameFields( field1: string, field2:string ){

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if ( pass1 !== pass2 ){
        formGroup.get(field2)?.setErrors({ noSames:true })
        return { noSames: true };
      }

      formGroup.get(field2)?.setErrors(null)
      return null 
    }

  }
}
