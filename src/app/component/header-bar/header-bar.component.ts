import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoRoot, MyInfo } from 'src/app/common/interface/myinfo';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  public infoUrl: string = '/assets/json/mydetails.json';

  public myDetailsInfo: MyInfo[] = [];
  public detail: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getMyDetailInfo().subscribe((res) => {
      this.detail = res.MyInfo[0];
      console.log(this.detail);
    });
  }

  getMyDetailInfo(): Observable<InfoRoot> {
    return this.http.get<InfoRoot>(this.infoUrl);
  }

}
