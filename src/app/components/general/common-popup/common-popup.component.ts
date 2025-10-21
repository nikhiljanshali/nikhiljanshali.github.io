import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsService } from '@services/analytics/analytics.service';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.scss']
})
export class CommonPopupComponent implements OnInit {

  @Input() lesson: any;

  constructor(public activeModal: NgbActiveModal, public analyticsService: AnalyticsService,) { }

  ngOnInit() { }

}
