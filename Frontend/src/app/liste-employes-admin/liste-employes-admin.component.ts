import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ApiServiceService, Utilisateur } from '../api-service.service';

@Component({
  selector: 'app-liste-employes-admin',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './liste-employes-admin.component.html',
  styleUrl: './liste-employes-admin.component.css'
})
export class ListeEmployesAdminComponent {
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
