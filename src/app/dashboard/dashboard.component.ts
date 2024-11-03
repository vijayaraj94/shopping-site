import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  userList: any = [
    {
      "id": 1,
      "name": "Vijay",
      "email": "Vijay@test.com",
      "phone": 9087654321,
      "address": "test address"
    },
    {
      "id": 2,
      "name": "Raj",
      "email": "raj@test.com",
      "phone": 1234567890,
      "address": "raj test"
    },
    {
      "id": 3,
      "name": "vijayaraj",
      "email": "vijayr@test.com",
      "phone": 1234567890,
      "address": "No 1234"
    },
    {
      "id": 4,
      "name": "Simi",
      "email": "simi@test.com",
      "phone": 1234567890,
      "address": "No 3, simi"
    },
    {
      "id": 5,
      "name": "Joe",
      "email": "joe@gmail.com",
      "phone": 7689023451,
      "address": "xyz address"
    },
    {
      "id": 6,
      "name": "Das",
      "email": "das@gmail.com",
      "phone": 1234567890,
      "address": "1213, school street"
    },
    {
      "id": 7,
      "name": "Mani",
      "email": "mani@yahoo.com",
      "phone": 324156890,
      "address": "52, Kovil street"
    }
  ];

  constructor(
    private route: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {

  }

  logOut() {
    this.authService.logout();
    this.route.navigate(['/']);
    // this.route.navigateByUrl('/login');
  }
  

}
