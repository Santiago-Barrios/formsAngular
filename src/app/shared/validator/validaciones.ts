import { FormControl } from "@angular/forms";


export const nameLastNamePattern: string = "([a-zA-Z]+) ([a-zA-A]+)";
export const emailPattern       : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const canNotBeStrider =  (control:FormControl) => {
    const value = control.value.trim().toLowerCase();
    if( value === 'strider' ){
      console.log(value)
      return {
        noStrider: true,
      }
    }
    return null;
  }