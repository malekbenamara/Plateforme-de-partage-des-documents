import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/Model';

@Component({
  selector: 'app-liste-categories-admin',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './liste-categories-admin.component.html',
  styleUrl: './liste-categories-admin.component.css'
})
export class ListeCategoriesAdminComponent {
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
