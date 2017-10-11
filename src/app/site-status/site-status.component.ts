import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-site-status',
  templateUrl: './site-status.component.html',
  styleUrls: ['./site-status.component.scss']
})
export class SiteStatusComponent implements OnInit {
  siteStatus: {
    users: string,
    visitors: string,
    articles: string,
    comments: string,
    maxOnlineNum: string,
    maxOnlineTime:string,
    onlineNum: string,
    onlineUsers: string
  };
  siteStatusShow: boolean = true;
  constructor(private http: Http) {
  }

  ngOnInit() {
    let header:Headers = new Headers();
    header.append('ONI-PLAN','MANGFU');
     this.http.get('/api/index',{headers: header})
      .subscribe((response: Response) => {
        let data = response.json().data;
        this.siteStatus = {
          users: data.users,
          visitors: data.vissitors,
          articles: data.articles,
          comments:data.comments,
          maxOnlineNum: data.maxOnlineNum,
          onlineNum: data.onlineNum,
          onlineUsers: data.onlineUsers,
          maxOnlineTime:data.maxOnlineTime
        }
      })
  }

  closeSiteStatus() {
    this.siteStatusShow = !this.siteStatusShow;
  }

}