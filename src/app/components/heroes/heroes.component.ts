import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe  } from '../../services/heroes.service';
import { log } from 'util';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
