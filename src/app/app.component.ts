import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'app';
  data = {
  };
  constructor(private http: HttpServiceService  ) {
    this.http.getData().subscribe((data: any) => {
      this.data = data;
    });
  }
  ngOnInit() {
    document.addEventListener('deviceready', function() {
      alert(device.platform);
    }, false);
  }

}
