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
  
  private stompClient: Client;
  constructor(private http: HttpClient) {
      const socket = new SockJS('http://localhost:8081/ws-chat');
      this.stompClient = over(socket);
  }
  private apiUrl = 'http://localhost:8081/api';
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

  getByCategorieId(categoryId: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/categorie/{id}/documents/${categoryId}`);
  }
  //Liste des messages

  connect(onMessageReceived: (msg: any) => void): void {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/public', (message: Message) => {
        onMessageReceived(JSON.parse(message.body));
      });
    });
  }

  sendMessage(message: any): void {
    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(message));
  }





  //Liste des documents
getDocumentsByCategorieId(id: number): Observable<DocumentModel[]> {
  return this.http.get<DocumentModel[]>(`${this.apiUrl}/documents/categorie/${id}`);
}
  //Télécharger +supp
  

  downloadDocument(id: number) {
    return this.http.get(`${this.apiUrl}/documents/download/${id}`, { responseType: 'blob' });
  }
  

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/documents/${id}`);
  }
}




export type { Utilisateur };

