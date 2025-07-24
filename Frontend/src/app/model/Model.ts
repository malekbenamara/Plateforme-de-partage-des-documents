export enum Role {
  USER = 'User',
  ADMIN = 'Admin'
}
export interface Document {
  document_id: number;
  nom: string;
  categorie: {
    categorie_id: number;
    nom: string;
  };
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