import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor() {}

  handleLogin() {
    console.info({ email: this.email, password: this.password }); // pobranie treści z komponentu (źródło: sparowane pola formularza)
  }
}