import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {



  constructor() { }

  handleSubmit( formData ) {
    // $event.preventDefault();
/*     const newPost = {
      title: title,
      shortContent: shortContent,
      longContent: longContent
    } */
    console.log( formData );
  }

  ngOnInit(): void {
  }

}
