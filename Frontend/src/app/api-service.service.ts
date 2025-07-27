import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Categorie, Message, Utilisateur } from './model/Model';

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
    return this.http.post<{
      token(arg0: string, token: any): unknown; success: boolean, message: string }>(`${this.apiUrl}/login`, { email, password });
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
  

  getByCategorieId(catId: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/categories/${catId}/documents`);
  }

  addToCategorie(catId: number, document: Document): Observable<Document> {
    return this.http.post<Document>(`${this.apiUrl}/categories/${catId}/documents`, document);
  }
}



export type { Utilisateur };

