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
      "alt": "Apache cordova - Build Hybrid Mobile Apps with HTML, CSS & JS",
      "title": "Apache cordova - Build Hybrid Mobile Apps with HTML, CSS & JS",
      "src": "../../../assets/images/certificate/UC-3b8b39cf-7ab7-462d-94f6-39148c6f5215.jpg"
    },
    {
      "id": 2,
      "alt": "Angular CLI - Mastring the Basic",
      "title": "Angular CLI - Mastring the Basic",
      "src": "../../../assets/images/certificate/UC-4e42150c-378d-46f8-b519-cd8066fe9e6e.jpg"
    },
    {
      "id": 3,
      "alt": "Angular Crash Course for Busy Developers",
      "title": "Angular Crash Course for Busy Developers",
      "src": "../../../assets/images/certificate/UC-G28GFYW9.jpg"
    },
    {
      "id": 4,
      "alt": "Prograssive Web Apps(PWA) - The Complete Guide",
      "title": "Prograssive Web Apps(PWA) - The Complete Guide",
      "src": "../../../assets/images/certificate/UC-M93KOG55.jpg"
    },
    {
      "id": 5,
      "alt": "The Complete Angular Course :  Begineer to Advance",
      "title": "The Complete Angular Course :  Begineer to Advance",
      "src": "../../../assets/images/certificate/UC-NGPDDFV3.jpg"
    },
    {
      "id": 6,
      "alt": "ExpresJS Fundamentals",
      "title": "ExpresJS Fundamentals",
      "src": "../../../assets/images/certificate/UC-PVW01NUW.jpg"
    },
    {
      "id": 7,
      "alt": "React Fundamentals",
      "title": "React Fundamentals",
      "src": "../../../assets/images/certificate/UC-S9M0YY5K.jpg"
    },
    {
      "id": 8,
      "alt": "Team Leadship and Team Management",
      "title": "Team Leadship and Team Management",
      "src": "../../../assets/images/certificate/Screenshot_3.png"
    },
    {
      "id": 9,
      "alt": "ReactJs Tutorial",
      "title": "ReactJs Tutorial",
      "src": "../../../assets/images/certificate/Screenshot_4.png"
    }
  ]

  constructor(
    private http: HttpClient,
  ) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ["<div class='nav-btn prev-slide fa fa-angle-left '></div>", "<div class='nav-btn next-slide fa fa-angle-right'></div>"],
    margin: 10,
    responsiveRefreshRate: 5000,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      }
    },
    nav: true
  }

  ngOnInit() {
  }

}
