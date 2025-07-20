import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Utilisateur } from './model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:8081/api/utilisateur';

  constructor(private http: HttpClient) {}
//register
  enregistrerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, utilisateur);
  }

  // Liste des utilisateurs
getAllUtilisateurs(): Observable<any> {
  return this.http.get(`${this.apiUrl}/liste`);
}


  


//Liste des catégories
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/liste-categories`);
  }

//Liste des messages
  getMessages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/liste-messages`);
  }

//Liste des documents
  getDocuments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/liste-documents`);
  }
}


export type { Utilisateur };

