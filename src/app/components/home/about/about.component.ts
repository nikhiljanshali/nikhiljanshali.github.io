import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private titleService: Title,
    public analyticsService: AnalyticsService
  ) {
  }

  ngOnInit(): void {
  }

}
