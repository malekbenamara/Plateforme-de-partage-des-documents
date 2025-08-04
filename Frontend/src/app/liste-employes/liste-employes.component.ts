import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiServiceService, Utilisateur } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
@Component({
  selector: 'app-liste-employes',
  imports: [CommonModule, HeaderComponent, ChatComponent],
  templateUrl: './liste-employes.component.html',
  styleUrl: './liste-employes.component.css'
})
export class ListeEmployesComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  utilisateurSelectionne: Utilisateur | null = null;
    erreur: string = '';
  employees: any;
  chatComponent: any;
   

  constructor(private utilisateurService: ApiServiceService,private router: Router) {}
  ouvrirChat(user: Utilisateur) {
    this.utilisateurSelectionne = user;
  }


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






