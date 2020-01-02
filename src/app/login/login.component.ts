import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {console.log('login component is loaded');  }

  ngOnInit() {
  }

  validateUser() {
    this.router.navigateByUrl('main/home');
  }
}
