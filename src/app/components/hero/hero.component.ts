import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: Heroe;

  constructor(private _heroesService: HeroesService,
              private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe( params => {
      this.hero = this._heroesService.getHero(params['id']);
    });

  }

  ngOnInit() {
  }

}
