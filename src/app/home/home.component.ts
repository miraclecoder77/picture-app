import { catchError, map } from 'rxjs/operators';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getImage(1) //get the images on init
  }
  //get the  images
  getImage(pageno) {
    this.api.getImages(pageno)
      .subscribe(
        (res) => {
          this.images = res;
        }
      )
  }
  
  onPageChange(pageno) {
    this.getImage(pageno)
  }

}
