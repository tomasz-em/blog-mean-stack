import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiStatusResponse } from './interfaces/api-status-response.interface';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  status = null;

  constructor(httpClient: HttpClient) {
    httpClient
      .get(`${environment.apiUrl}/api/status`)
      .toPromise()
      .then((data: ApiStatusResponse) => (this.status = data.status));

  }

}
