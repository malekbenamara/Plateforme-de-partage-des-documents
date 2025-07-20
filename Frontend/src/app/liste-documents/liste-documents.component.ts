import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-documents',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './liste-documents.component.html',
  styleUrl: './liste-documents.component.css'
})
export class ListeDocumentsComponent {
    documents: any[] = [];

}
