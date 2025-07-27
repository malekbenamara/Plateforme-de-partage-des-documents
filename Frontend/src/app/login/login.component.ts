import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Header1Component } from '../header1/header1.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';



@Component({
  selector: 'app-login',
  imports: [CommonModule,Header1Component,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: ApiServiceService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/liste-categories']);
      } else {
        this.errorMessage = response.message;
      }
    });
  }
}





   
