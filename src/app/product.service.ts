import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AlbumStorePage } from '../../e2e/app.po';

import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  // album: any;

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map((response) => <Album>response.json());
  }

  // getAlbum(id: number): Observable<Album> {
  //   return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  // }

}
