import {Component, OnInit} from '@angular/core';;
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }


  register;

  ngOnInit(): void {
    this.register = {
      username: '',
      email: '',
      password: ''
    };
  }
  onRegister() {
    console.log(this.register);
    this.userService.registerUser(this.register).subscribe(response => {
        this.router.navigateByUrl('');
      });
  }

}
