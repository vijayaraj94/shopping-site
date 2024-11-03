import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = {
    email_id: '',
    pwd: ''
  };

  constructor(
    private route: Router,
    private authService: AuthenticationService,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.loginForm));
    const redirectUrl = this.loginForm.email_id === 'admin@gmail.com' ? '/dashboard' : '/shopping';
    if(this.loginForm.email_id) {
      localStorage.setItem('access', 'ok');
      this.toster.success('You have successfully logged in...', '');
      setTimeout(() => {
        this.route.navigate([redirectUrl]);
      }, 1000);
    }
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
