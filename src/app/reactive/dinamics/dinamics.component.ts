import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  formulario: FormGroup = this.fb.group ({
    name     : [ , [Validators.required, Validators.minLength(3)],  ],
    favorites: this.fb.array( [
      ['One Pieces', Validators.required],
      ['Dragon Ball', Validators.required]
    ], Validators.required ),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArr(){
    return this.formulario.get('favorites') as FormArray;
  }

  constructor( private fb: FormBuilder  ) { }


  fieldNoValid(field:string){
    return this.formulario.controls[field].errors && 
            this.formulario.controls[field].touched
  }

  addNewFavorite(){
    if(this.newFavorite.invalid){
      return;
    }
    // ((this.formulario.controls.favorites) as FormArray).push( this.newFavorite );
    // this.favoritesArr.push( new FormControl( this.newFavorite.value, Validators.required ) );
    this.favoritesArr.push( this.fb.control( this.newFavorite.value, Validators.required ) );
    this.newFavorite.reset();
  }

  deleteFavorite(index: number){
    this.favoritesArr.removeAt(index)
  }

  save(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value)
  }



}
