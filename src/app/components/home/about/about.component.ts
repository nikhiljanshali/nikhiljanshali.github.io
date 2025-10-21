import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images: string[] = [
    'assets/images/working-from-home.svg',
    'assets/images/hardworking.svg',
    'assets/images/remote-ideation.svg',
    'assets/images/people-collaborating-remotely.svg'
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(
    private titleService: Title,
    public analyticsService: AnalyticsService
  ) {
  }

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }
}
