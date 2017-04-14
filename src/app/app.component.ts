import { Component } from '@angular/core';
import{ AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appservice: AppService) {};
  users = {};

  loadUser(flag){
    this.appservice.getUser(flag).subscribe(data => this.users =  data);
  }

  title = 'app works!';
}
