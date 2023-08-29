import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoRoot, MyInfo } from 'src/app/common/interface';

@Component({
  selector: 'app-resume-title',
  templateUrl: './resume-title.component.html',
  styleUrls: ['./resume-title.component.css']
})
export class ResumeTitleComponent implements OnInit {

  public infoUrl: string = '/assets/json/mydetails.json';

  public myDetailsInfo: MyInfo[] = [];
  public detail: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMyDetailInfo().subscribe((res) => {
      this.detail = res.MyInfo[0];
    });
  }

  getMyDetailInfo(): Observable<InfoRoot> {
    return this.http.get<InfoRoot>(this.infoUrl);
  }

}
