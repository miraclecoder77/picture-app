import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }



  getImages(pageno: number) {
    return this.http.get<any>('https://picsum.photos/v2/list?page='+ pageno +'&limit=6')
  }

}
