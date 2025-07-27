export enum Role {
  USER = 'User',
  ADMIN = 'Admin'
}
export interface Document {
  document_id: number;
  nom: string;
  description:string;
  category?: Categorie;
}

export interface Message {
  id?: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
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