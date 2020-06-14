import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiStatusResponse } from './interfaces/api-status-response.interface';
import { Post } from './post';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getStatus(): Promise<ApiStatusResponse> {
    console.info("używam API Service!");

    return this.httpClient
      .get<ApiStatusResponse>(`${environment.apiUrl}/api/status`)
      .toPromise();
  }

  getPosts(): Promise<Array<Post>> {
    return this.httpClient
      .get<Array<Post>>(`${environment.apiUrl}/api/posts`)
      .toPromise();
  }
}