import { Component } from '@angular/core';
import { Categorie, DocumentModel } from '../model/Model';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-liste-categories-admin',
  imports: [HeaderAdminComponent,CommonModule, FormsModule, HeaderAdminComponent],
  templateUrl: './liste-categories-admin.component.html',
  styleUrl: './liste-categories-admin.component.css'
})
export class ListeCategoriesAdminComponent {
   categories: Categorie[] = [];
   documents: DocumentModel[] = [];
 
   constructor(private categorieService: ApiServiceService,private router:Router) {}
 
   ngOnInit() {
       this.categorieService.getCategories().subscribe((data: Categorie[]) => {
       this.categories = data;
   });
 
   }
   voirDocuments(id: number) {
   this.router.navigate(['/documents-Admin', id]); 
 }
 
  nouvelleCategorie: Categorie = {
        nom: ''
  };
  afficherFormulaireAjout = false;


  ajouter() {
    if (!this.nouvelleCategorie.nom.trim()) return;

    this.categorieService.ajouterCategorie(this.nouvelleCategorie).subscribe({
      next: (cat) => {
        this.categories.push(cat);
        this.nouvelleCategorie = {  nom: '' };
        console.log('categorie installe !')
      },
      error: (err) => {
        console.error('Erreur ajout catégorie', err);
      }
    });
  }

  supprimer(id: number) {
    if (confirm('Confirmer la suppression ?')) {
      this.categorieService.supprimerCategorie(id).subscribe(() => {
        this.categories = this.categories.filter(c => c.id !== id);
      });
    }
  }
}


