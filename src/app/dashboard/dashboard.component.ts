import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loggedInUser: any;

  constructor(private router: Router) { }

  ngOnInit() {
    // Retrieve logged-in user data from local storage
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }

  logout() {
    // Clear logged-in user data from local storage
    localStorage.removeItem('loggedInUser');
    this.router.navigateByUrl('/login');
  }
}
