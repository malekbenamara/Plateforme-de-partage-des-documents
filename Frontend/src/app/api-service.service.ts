import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Categorie, ChatMessage, DocumentModel, Utilisateur } from './model/Model';
import { Client, Message, Message as StompMessage, over } from 'stompjs';
import {  Socket } from 'socket.io-client';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  [x: string]: any;
  
  //private stompClient: Client;
  constructor(private http: HttpClient) {
     /* const socket = new SockJS('http://localhost:8081/ws-chat');
      this.stompClient = over(socket);*/
  }
  private apiUrl = 'http://localhost:8081/api';
//register
  enregistrerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}/utilisateur`, utilisateur);
  }
  //login

  login(email: string, password: string) {
  return this.http.post<{ 
    success: boolean, 
    message: string, 
    role: string 
  }>(`${this.apiUrl}/login`, { email, password });
}

  // Liste des utilisateurs
    getUtilisateurs(): Observable<Utilisateur[]> {
        return this.http.get<Utilisateur[]>(`${this.apiUrl}/utilisateur/liste`);
      }
    
  //Liste des catégories
   getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/categorie/liste`);
  }

  getByCategorieId(categoryId: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/categorie/{id}/documents/${categoryId}`);
  }
  //Liste des messages

 


  //Liste des documents
getDocumentsByCategorieId(id: number): Observable<DocumentModel[]> {
  return this.http.get<DocumentModel[]>(`${this.apiUrl}/documents/categorie/${id}`);
}
  //Télécharger + Supprimer document

  downloadDocument(id: number) {
    return this.http.get(`${this.apiUrl}/documents/download/${id}`, { responseType: 'blob' });
  }
  

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/documents/${id}`);
  }
  //Ajouter un document
  ajouterDocument(document: DocumentModel, id: number): Observable<Document> {
    return this.http.post<Document>(`${this.apiUrl}/documents/ajouter/${id}`, document);
  }
  //Supprimer utilisateur
  supprimerUtilisateur(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/utilisateur/${id}`);
}
//ajouter + supprimer categorie 
  ajouterCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.apiUrl}/categorie/ajouter`, categorie);
  }

  supprimerCategorie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categorie/supprimer/${id}`);
  }


}




export type { Utilisateur };

