import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AlbumStorePage } from '../../e2e/app.po';

@Injectable()
export class ProductService {

  private _albumUrl: '../assets/album.json';
  // album: any;

  constructor(private _http: Http) { }

  getAlbum( id: number): Observable<album> {
    return this._http.get(this._albumUrl)
      .pipe(map((response: any) => <album>response.json()));
  }

  // getAlbum(id: number): Observable<Album> {
  //   return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  // }

}
