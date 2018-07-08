import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
declare var device;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _opened = false;
  showBackDrop = true;
  isLoading = true;
  title = 'app';
  data = {
    menu: {
      title: '',
      links: [],
      search: {
        isVisible: true
      },
      login: {
        isVisible: true
      }
    },
    slider: {
      items: []
    },
    projects: [],
    deals: [],
    footers: []
  };
  constructor(private http: HttpServiceService  ) {
    this.data = this.http.getLocalData();
    this.http.getData().subscribe((data: any) => {
      this.data = data;
      this.isLoading = false;
    },
    (error: any) => {
      this.isLoading = false;
    }
  );
  }
  ngOnInit() {
    document.addEventListener('deviceready', function() {
      alert(device.platform);
    }, false);
  }
  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
