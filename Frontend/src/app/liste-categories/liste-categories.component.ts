import { Component, Injectable ,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

import { ApiServiceService } from '../api-service.service';
import { Categorie,Document } from '../model/Model';

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
  documents: Document[] = [];

  constructor(
    private categorieService: ApiServiceService,
    private documentService: ApiServiceService
  ) {}

  ngOnInit() {
    this.categorieService.getCategories().subscribe(data => this.categories = data);
  }


}




