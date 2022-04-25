import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit, OnDestroy {
  sort!: string;
  games!: Array<Game>;
  gameGenres!: any;
  private _routeSub!: Subscription;
  private _gameSub!: Subscription;
  private _gameGenresSub!: Subscription;

  constructor(
      private _httpservice: HttpService,
      private _activatedRoute: ActivatedRoute,
      private _router: Router
    ) { }

  ngOnInit(): void {
    this._routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      if(params["game-search"]) {
        this.searchGames("-rating", params["game-search"]);
      } else {
        this.searchGames("-rating");
      }
    });

    this.getGameGenres();
  }

  searchGames(sort: string, search?: string): void {
    this._gameSub = this._httpservice.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    })
  }

  getGameGenres(): void {
    this._gameGenresSub = this._httpservice.getGameGenres().subscribe((gameGenres: any) => {
      this.gameGenres = gameGenres.results;
      console.log(gameGenres);
    })
  }

  openGameDetail(id: number) {
    this._router.navigate(["details", id]);
  }


  ngOnDestroy(): void {
      if (this._routeSub) {
        this._routeSub.unsubscribe();
      }
      if (this._gameSub) {
        this._gameSub.unsubscribe();
      }
      if (this._gameGenresSub) {
        this._gameGenresSub.unsubscribe();
      }
  }
}
