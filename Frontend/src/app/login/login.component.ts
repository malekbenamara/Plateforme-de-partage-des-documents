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

  constructor(private apiService: ApiServiceService, private router: Router) {}

  onSubmit() {
    this.apiService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/liste-employes']); // exemple redirection
      },
      error: () => {
        console.log('Email ou mot de passe incorrect');
      }
    });
  }
}



   
