import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { forkJoin, map, Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set("ordering", ordering);
    if (search) {
      params = new HttpParams().set("ordering", ordering).set("search", search);
    }
    return this._http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params: params});
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this._http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this._http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this._http.get(`${env.BASE_URL}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest, gameScreenshotsRequest, gameTrailersRequest
    }).pipe(map((wholeResponse: any) => {
      return {
        ...wholeResponse["gameInfoRequest"],
        screenshots: wholeResponse["gameScreenshotsRequest"]?.results,
        trailers: wholeResponse["gameTrailersRequest"]?.results
      };
    })
    );
  }

  getGameGenres(): Observable<Object> {
    let params = new HttpParams().set("ordering", "-released");
    return this._http.get<Observable<Object>>(`${env.BASE_URL}/genres`, {params: params});
  }
  // getGamePlatforms(): Observable<Object> {
  //   let params = new HttpParams().set("ordering", "-released");
  //   return this._http.get<Observable<Object>>(`${env.BASE_URL}/platforms`, {params: params});
  // }

  // getGamePublishers(): Observable<Object> {
  //   return this._http.get<Observable<Object>>(`${env.BASE_URL}/publishers`);
  // }

  // getGameStores(): Observable<Object> {
  //   let params = new HttpParams().set("ordering", "-released");
  //   return this._http.get<Observable<Object>>(`${env.BASE_URL}/stores`, {params: params});
  // }

  // getGameTags(): Observable<Object> {
  //   return this._http.get<Observable<Object>>(`${env.BASE_URL}/tags`);
  // }

}
