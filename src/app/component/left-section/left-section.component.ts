import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyWorkExperience, WorkExperienceRoot } from 'src/app/common/interface/workexperience';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  public wurl: string = '/assets/json/experience.json';

  public workExperience: Array<MyWorkExperience> = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getWorkExperience().subscribe((res) => {
      this.workExperience = res.MyWorkExperience;
    });

  }

  getWorkExperience(): Observable<WorkExperienceRoot> {
    return this.http.get<WorkExperienceRoot>(this.wurl);
  }

}
