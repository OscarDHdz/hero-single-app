import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  query: string;

  constructor(private _heroesService: HeroesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this.heroes = this._heroesService.searchHero(this.query);
    });
  }

  ngOnInit() {
  }

  verHeroe(index: number) {
    this._router.navigate(['/hero', index]);
  }

}
