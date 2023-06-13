import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationRoot, MyEducation } from 'src/app/common/interface/education';
import { InterestRoot, MyInterest } from 'src/app/common/interface/intereset';
import { LanguagesRoot, MyLanguage } from 'src/app/common/interface/languages';
import { BackEnd, FrontEnd, KeySkill, Other, SkillRoot } from 'src/app/common/interface/skills';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {

  public surl: string = '/assets/json/skills.json';
  public eurl: string = '/assets/json/education.json';
  public lurl: string = '/assets/json/language.json';
  public iurl: string = '/assets/json/interest.json';

  public frontEndSkills: Array<FrontEnd> = [];
  public backEndSKills: Array<BackEnd> = [];
  public otherSkills: Array<Other> = [];
  public keySkills: Array<KeySkill> = [];

  public myEducation: Array<MyEducation> = [];
  public myLanguage: Array<MyLanguage> = [];
  public myInterest: Array<MyInterest> = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getSkills().subscribe((res) => {
      this.frontEndSkills = res.MySkills[0].FrontEnd;
      this.backEndSKills = res.MySkills[0].BackEnd;
      this.otherSkills = res.MySkills[0].Others;
      this.keySkills = res.MySkills[0].KeySkill;
    });

    this.getEducation().subscribe((res) => {
      this.myEducation = res.MyEducation;
    });

    this.getLanguages().subscribe((res) => {
      this.myLanguage = res.MyLanguage;
    });

    this.getInterest().subscribe((res) => {
      this.myInterest = res.MyInterest;
    });
  }

  getSkills(): Observable<SkillRoot> {
    return this.http.get<SkillRoot>(this.surl);
  }

  getEducation(): Observable<EducationRoot> {
    return this.http.get<EducationRoot>(this.eurl);
  }

  getLanguages(): Observable<LanguagesRoot> {
    return this.http.get<LanguagesRoot>(this.lurl);
  }

  getInterest(): Observable<InterestRoot> {
    return this.http.get<InterestRoot>(this.iurl);
  }

}
