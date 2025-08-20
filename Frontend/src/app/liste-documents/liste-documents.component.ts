import { Component, OnInit, TemplateRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgIfContext } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { DocumentModel} from '../model/Model';
import { saveAs } from 'file-saver'; // npm install file-saver
@Component({
  selector: 'app-liste-documents',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './liste-documents.component.html',
  styleUrl: './liste-documents.component.css'
})


export class ListeDocumentsComponent implements OnInit {
 
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
//Supprimer
  delete(id: number) {
    this.docService.deleteDocument(id).subscribe(() => {
      this.documents = this.documents.filter(d => d.id !== id);
    });
  }
  
}








 