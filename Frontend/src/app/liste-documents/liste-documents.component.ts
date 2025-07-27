import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
 import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-liste-documents',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './liste-documents.component.html',
  styleUrl: './liste-documents.component.css'
})
export class ListeDocumentsComponent {
    documents: Document[] = [];

  constructor(private apiService: ApiServiceService,private route: ActivatedRoute) {}

 ngOnInit(): void {
    const categoryId = this.route.snapshot.params['id'];
    this.apiService.getByCategorieId(categoryId).subscribe((docs: Document[]) => {
      this.documents = docs;
    });
    }
  }
