import { Component, Inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject('auth') private auth) {}

  title = 'Ok works!';

  message = 'Let\'s go';

  searchUpdate(x, y, z) {
    console.log('---', x, y, z)
  }
}
