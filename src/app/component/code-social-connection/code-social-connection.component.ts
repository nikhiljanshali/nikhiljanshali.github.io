import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoRoot, MyInfo } from 'src/app/common/interface/myinfo';

@Component({
  selector: 'app-code-social-connection',
  templateUrl: './code-social-connection.component.html',
  styleUrls: ['./code-social-connection.component.css'],
})
export class CodeSocialConnectionComponent implements OnInit {
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
