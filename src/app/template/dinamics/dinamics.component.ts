import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  newAnime: string = '';

  person: Person = {
    name: 'Santiago',
    favorites: [
      { id: 1, name: 'One piece' },
      { id: 2, name: 'Naruto' },
    ]
  }

  @ViewChild('formulario') formulario!: NgForm;


  save(){
    console.log(this.formulario);
  }

  delete(index:number){
    this.person.favorites.splice(index, 1);
  }

  add(){
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newAnime,
    }
    
    this.person.favorites.push( {...newFavorite} );
    this.newAnime = '';
  }

}
