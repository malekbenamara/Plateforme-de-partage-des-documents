import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header1Component } from '../header1/header1.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Role, Utilisateur } from '../model/Model';

@Component({
  selector: 'app-register',
  imports: [FormsModule,Header1Component,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    Role = Role; 
  constructor(private apiService:ApiServiceService,private router: Router) {}
  utilisateur: Utilisateur = { nom: '',prenom:'', email: '', password: '',role:Role.USER };

  onSubmit() {
    this.apiService.enregistrerUtilisateur(this.utilisateur)
      .subscribe({
        next: data =>  {
          console.log('Utilisateur enregistré:', data);
          this.router.navigate(['/liste-employes']); // ← Redirection ici
        },
        error: err => console.error('Erreur:', err)
      });
  }
}


 
