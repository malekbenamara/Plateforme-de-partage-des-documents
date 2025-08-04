import { Component, Injectable ,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

import { ApiServiceService } from '../api-service.service';
import { Categorie, DocumentModel } from '../model/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-categories',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './liste-categories.component.html',
  styleUrl: './liste-categories.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class ListeCategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  documents: DocumentModel[] = [];

  constructor(private categorieService: ApiServiceService,private router:Router) {}

  ngOnInit() {
      this.categorieService.getCategories().subscribe((data: Categorie[]) => {
      this.categories = data;
  });

  }
  voirDocuments(id: number) {
  this.router.navigate(['/documents', id]); // Redirige vers documents liés
}

    
}




