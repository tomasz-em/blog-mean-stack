import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService';
// import { Post, postData } from './../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  data = null;

  constructor(apiService: ApiService) {
    apiService.getPosts().then((data) => {
      this.data = data;
    });
  }    

}
