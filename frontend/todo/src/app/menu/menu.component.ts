import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false;

  constructor(private harcodedAuthenticationService: HarcodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.harcodedAuthenticationService.isUserLoggedIn();
  }

}
