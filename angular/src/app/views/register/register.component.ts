import {Component, OnInit} from '@angular/core';;
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.pattern('[A-z][A-z]+')),
    lastName: new FormControl('', Validators.pattern('[A-z][A-z]+')),
    username: new FormControl(''),
    phoneNumber: new FormControl('', Validators.pattern('[0-9 ]{9}')),
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  ngOnInit(): void {

  }
  hasError(controlName) {
    return this.registerForm.get(controlName).hasError;
  }
  onRegister() {
   this.userService.registerUser(this.registerForm.value).subscribe(response => {
        this.router.navigateByUrl('');
       });
  }


}
