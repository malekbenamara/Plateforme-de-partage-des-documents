import { Component, Injectable ,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiServiceService } from '../api-service.service';
import { Categorie } from '../model/Model';

@Component({
  selector: 'app-liste-categories',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './liste-categories.component.html',
  styleUrl: './liste-categories.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class ListeCategoriesComponent {
 categories: Categorie[] = [];

  constructor(private categorieService: ApiServiceService,private router: Router) {}

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Erreur de chargement des catégories:', err)
    });
  }
  

  ouvrirCategorie(id: number) {
    this.router.navigate(['/liste-documents', id]);
  }
  }








