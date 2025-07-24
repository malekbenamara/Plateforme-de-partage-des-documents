import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiServiceService, Utilisateur } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-employes',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './liste-employes.component.html',
  styleUrl: './liste-employes.component.css'
})
export class ListeEmployesComponent implements OnInit {
  
   utilisateurs: Utilisateur[] = [];
  erreur: string = '';

  constructor(private utilisateurService: ApiServiceService) {}

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe({
      next: (data) => {
        this.utilisateurs = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs:', err);
        this.erreur = 'Impossible de charger les utilisateurs.';
      }
    });
  }
}


