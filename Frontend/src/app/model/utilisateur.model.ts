export enum Role {
  USER = 'User',
  ADMIN = 'Admin'
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