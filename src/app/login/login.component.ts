import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (userData.username === this.loginData.username && userData.password === this.loginData.password) {
      // Successful login
      localStorage.setItem('loggedInUser', JSON.stringify(userData));
      this.router.navigateByUrl('/dashboard');
    } else {
      // Invalid credentials
      alert('Invalid username or password');
    }
  }
}
