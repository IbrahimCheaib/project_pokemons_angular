import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

pokemons = POKEMONS;
// title: string = 'mon titre en javascript';
  constructor() { }

  ngOnInit(): void {
  }

}
