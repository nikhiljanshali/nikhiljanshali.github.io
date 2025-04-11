import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    public analyticsService: AnalyticsService
  ) {
    this.titleService.setTitle('Nikhil Janshali | Frontend Developer');
  }

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/home", "I enter into new begining...")
  }


}
