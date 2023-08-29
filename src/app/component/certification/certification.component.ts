import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {
  GalleryRoot,
  MyCertificationList,
} from 'src/app/common/interface/images';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CertificationComponent implements OnInit {
  public infoUrl: string = '/assets/json/certificate.json';

  public myCertificate: MyCertificationList[] = [];

  constructor(private http: HttpClient) {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<div class='nav-btn prev-slide fa fa-angle-left '></div>",
      "<div class='nav-btn next-slide fa fa-angle-right'></div>",
    ],
    margin: 10,
    responsiveRefreshRate: 5000,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
    },
    nav: true,
  };

  ngOnInit() {
    this.getMyCertificationDetails().subscribe((res) => {
      this.myCertificate = res.MyCertificationList;
    });
  }

  getMyCertificationDetails(): Observable<GalleryRoot> {
    return this.http.get<GalleryRoot>(this.infoUrl);
  }
}
