import {Component, OnInit} from '@angular/core';
import {MovieService} from './services/movie.service';
import {TokenStorage} from './core/token.storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
userLogged;
  username;

  constructor( private router: Router, private token: TokenStorage) {
  }

  ngOnInit() {
    if (this.token.getToken() === null) {
      this.userLogged = false;
    } else {
      this.username = this.token.getUsername();
      this.userLogged = true;
    }
  }

  logout() {
    this.token.removeToken();
    this.token.removeUsername();
    this.router.navigate(['']);
    this.ngOnInit();
  }
}
