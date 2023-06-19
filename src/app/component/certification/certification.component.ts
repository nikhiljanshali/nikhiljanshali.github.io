import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
import { GalleryRoot, MyCertificationList } from 'src/app/common/interface/images';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CertificationComponent implements OnInit {

  public infoUrl: string = '/assets/json/certificate.json';

  public myCertificate: MyCertificationList[] = [];


  dynamicSlides = [
    {
      "id": 1,
      "alt": "Test1",
      "title": "Test1",
      "src": "../../../assets/images/certificate/UC-3b8b39cf-7ab7-462d-94f6-39148c6f5215.jpg"
    },
    {
      "id": 2,
      "alt": "Test2",
      "title": "Test2",
      "src": "../../../assets/images/certificate/UC-4e42150c-378d-46f8-b519-cd8066fe9e6e.jpg"
    },
    {
      "id": 3,
      "alt": "Test3",
      "title": "Test3",
      "src": "../../../assets/images/certificate/UC-G28GFYW9.jpg"
    },
    {
      "id": 4,
      "alt": "Test4",
      "title": "Test4",
      "src": "../../../assets/images/certificate/UC-M93KOG55.jpg"
    },
    {
      "id": 5,
      "alt": "Test4",
      "title": "Test4",
      "src": "../../../assets/images/certificate/UC-NGPDDFV3.jpg"
    },
    {
      "id": 6,
      "alt": "Test4",
      "title": "Test4",
      "src": "../../../assets/images/certificate/UC-PVW01NUW.jpg"
    },
    {
      "id": 7,
      "alt": "Test4",
      "title": "Test4",
      "src": "../../../assets/images/certificate/UC-S9M0YY5K.jpg"
    },
    {
      "id": 8,
      "alt": "Test4",
      "title": "Test4",
      "src": "../../../assets/images/certificate/Screenshot_3.png"
    },
    {
      "id": 9,
      "alt": "Test4",
      "title": "Test4",
      "src": "../../../assets/images/certificate/Screenshot_4.png"
    }
  ]

  constructor(
    private http: HttpClient,
  ) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit() {
  }

}
