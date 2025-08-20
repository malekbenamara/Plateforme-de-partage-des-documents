import { Component } from '@angular/core';
import { DocumentModel } from '../model/Model';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-liste-documents-admin',
  imports: [HeaderAdminComponent,CommonModule, FormsModule, HeaderAdminComponent],
  templateUrl: './liste-documents-admin.component.html',
  styleUrl: './liste-documents-admin.component.css'
})
export class ListeDocumentsAdminComponent {
  documents: DocumentModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private docService: ApiServiceService
  ) {}


ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  const categorieId = idParam ? +idParam : null;

  if (categorieId !== null) {
    this.docService.getDocumentsByCategorieId(categorieId).subscribe({
      next: (data: DocumentModel[]) => this.documents = data,
      error: (err) => console.error('Erreur de chargement des documents:', err),
    });
  }
}



//telecharger
 download(doc: any) {
    this.docService.downloadDocument(doc.id).subscribe(
      blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = doc.fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Erreur lors du téléchargement', error);
    });
  }

  delete(id: number) {
    this.docService.deleteDocument(id).subscribe(() => {
      this.documents = this.documents.filter(d => d.id !== id);
    });
  }
  //Ajouter document
  nouveauDocument: DocumentModel= {
  nom: '',
  description: '',
  url:'',
  categorie: {
    id: 0
  }
};

message: string = '';

onSubmit() {
  console.log(this.nouveauDocument.nom )
  if (!this.nouveauDocument.nom || !this.nouveauDocument.description || !this.nouveauDocument.url||!this.nouveauDocument.categorie?.id) {
    this.message = 'Tous les champs sont requis.';
    return;
  }

  this.docService.ajouterDocument(this.nouveauDocument, this.nouveauDocument.categorie.id).subscribe({
    next: (doc) => {
      this.message = 'Document ajouté avec succès.';
      this.nouveauDocument = { nom: '', description: '',url:'', categorie: { id: 0 } };
    },
    error: () => {
      this.message = 'Erreur lors de l’ajout du document.';
    }
  });
}


}


