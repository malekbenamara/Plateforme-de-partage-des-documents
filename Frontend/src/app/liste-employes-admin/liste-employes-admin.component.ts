import { Component } from '@angular/core';
import { ApiServiceService, Utilisateur } from '../api-service.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ChatComponent } from "../chat/chat.component";
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { Role } from '../model/Model';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-liste-employes-admin',
  imports: [HeaderAdminComponent, CommonModule, FormsModule, HeaderAdminComponent],
  templateUrl: './liste-employes-admin.component.html',
  styleUrl: './liste-employes-admin.component.css'
})
export class ListeEmployesAdminComponent {
 utilisateurs: Utilisateur[] = [];
  utilisateurSelectionne: Utilisateur | null = null;
    erreur: string = '';
  employees: any;
  chatComponent: any;
   

  constructor(private utilisateurService: ApiServiceService,private router: Router) {}

  formulaireVisible = false; 

  enregistrer() {
    this.formulaireVisible = true;
  }
 Role = Role; 

  utilisateur: Utilisateur = { nom: '',prenom:'', email: '', password: '',role:Role.USER };
messageErreur: string = '';
onSubmit() {
  if (!this.utilisateur.nom || !this.utilisateur.prenom || !this.utilisateur.email || !this.utilisateur.password) {
    this.messageErreur = "Tous les champs obligatoires doivent être remplis.";
    return;
  }

  this.utilisateurService.enregistrerUtilisateur(this.utilisateur)
    .subscribe({
      next: data => {
        console.log('Utilisateur enregistré:', data);

       
        this.utilisateurs.push(data);
        this.utilisateur = {} as Utilisateur;
        this.messageErreur = '';
        this.formulaireVisible = false;
      },
      error: err => {
        this.messageErreur = err.error?.message || 'Erreur lors de l’enregistrement.';
      }
    });
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
  //Supprimer utilisateur 
  supprimer(id: number) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
    this.utilisateurService.supprimerUtilisateur(id).subscribe({
      next: () => {
        this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
      },
      error: err => {
        console.error('Erreur lors de la suppression:', err);
      }
    });
  }
}


}








function ngOnInit() {
  throw new Error('Function not implemented.');
}

