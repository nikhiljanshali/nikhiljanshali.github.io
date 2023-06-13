import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProjectExperience, ProjectRoot } from 'src/app/common/interface/projects';

@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.css']
})
export class ProjectExperienceComponent implements OnInit {

  public purl: string = '/assets/json/projects.json';

  public projectExperience: Array<MyProjectExperience> = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProjectExperience().subscribe((res) => {
      this.projectExperience = res.MyProjectExperience;
    });
  }

  getProjectExperience(): Observable<ProjectRoot> {
    return this.http.get<ProjectRoot>(this.purl);
  }

}
