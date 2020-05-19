import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../../core/token.storage';
import {AuthService} from '../../services/auth.service';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(private main: AppComponent, private router: Router, private authService: AuthService, private token: TokenStorage) {
    }

    login(): void {
        this.authService.attemptAuth(this.username, this.password).subscribe(
            data => {
              this.token.saveUsername(data.username);
                this.token.saveToken(data.token.token);
                this.main.ngOnInit();
                // this.router.navigate(['user']);
            }
        );
    }


}
