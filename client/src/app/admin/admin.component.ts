import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    // utworzenie pustych zmiennych w komponencie, by się odwołać do niech w szablonie - pozyskanie z wartości pól formularzy
  title = '';
  shortContent = '';
  longContent = '';

  constructor() { }

  handleAddingNewPost() {
    console.info({
      title: this.title,
      shortContent: this.shortContent,
      longContent: this.longContent,
    });
  }

  ngOnInit(): void {
  }

}
