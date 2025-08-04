export enum Role {
  USER = 'User',
  ADMIN = 'Admin'
}
export interface DocumentModel {
  id: number;
  nom: string;
  description: string;
  url: string;
  categorie?: {
    id: number;
    nom: string;
  };
}

export interface ChatMessage {
  sender: string;
  content: string;
}
export interface Message {
  fromId: number;    // id de l'expéditeur
  toId: number;      // id du destinataire
  texte: string;
  date: Date;
}


export interface Utilisateur {
  id?: number;
  nom: string;
  prenom:string;
  email: string;
  password: string;
  role:Role;
}
export interface User{
  email:string;
  password:string
}
export interface Categorie {
  id: number;
  nom: string;
}