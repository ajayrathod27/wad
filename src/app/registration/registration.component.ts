import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerData = {
    name: '',
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(this.registerData));
    this.router.navigateByUrl('/login');
  }
}
