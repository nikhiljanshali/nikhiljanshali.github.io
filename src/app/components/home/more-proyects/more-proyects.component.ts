import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from 'src/app/components/general/common-popup/common-popup.component';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss'],
})
export class MoreProyectsComponent implements OnInit {

  project: any; // Define your project object with Description property
  showFullDescription = false;

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public modalService: NgbModal
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  redirect(route: string, event) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return
    }
    window.open(route, '_blank');
  }

  viewProjectDetails(index: number, details: any) {
    const modalOptions: NgbModalOptions = {
      size: 'xl',
      centered: true,
      backdrop: 'static',
      keyboard: false,
      scrollable: false,
      windowClass: 'my-class',
      animation: true,
      // windowClass: 'my-class',
      // modalDialogClass: 'my-dialog-class',
      // modalDialogClass: 'my-dialog-class',
      // Other options like centered: true can be set here if needed
    };

    const modalRef = this.modalService.open(CommonPopupComponent, modalOptions);
    modalRef.componentInstance.lesson = details;
  }
}
