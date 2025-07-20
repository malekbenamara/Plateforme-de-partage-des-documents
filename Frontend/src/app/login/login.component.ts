import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Header1Component } from '../header1/header1.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  constructor(private apiService: ApiServiceService, private router: Router) {}


  onSubmit() {

    };
  }

   
