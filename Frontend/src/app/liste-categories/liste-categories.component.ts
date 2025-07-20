import { Component, Injectable ,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-liste-categories',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './liste-categories.component.html',
  styleUrl: './liste-categories.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class ListeCategoriesComponent {

  categories= [{
    id:String,nom:String
  }];  
  
  constructor() {}

  }








