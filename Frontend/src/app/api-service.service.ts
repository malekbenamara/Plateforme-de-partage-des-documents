import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Categorie, Utilisateur } from './model/Model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}
//register
  enregistrerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}/utilisateur`, utilisateur);
  }
  //login
  
  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/utilisateur/login`, { email, password });
  }

  // Liste des utilisateurs
    getUtilisateurs(): Observable<Utilisateur[]> {
        return this.http.get<Utilisateur[]>(`${this.apiUrl}/utilisateur/liste`);
      }
    
  //Liste des catégories
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/categorie/liste`);
  }
  //Liste des messages
 
  //Liste des documents
  getDocumentsByCategorie(id: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/document/categorie/${id}`);
  }
  //////////////
  
}



export type { Utilisateur };

