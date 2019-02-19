import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private harcodedAuthenticationService: HarcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.harcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
