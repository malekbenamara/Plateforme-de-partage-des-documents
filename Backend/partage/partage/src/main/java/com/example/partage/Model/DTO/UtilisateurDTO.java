package com.example.partage.Model.DTO;

import com.example.partage.Model.Entity.Role;

public class UtilisateurDTO {
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private Role role;

    public UtilisateurDTO() {}

    public UtilisateurDTO(String nom, String prenom, String email, String password, Role role) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

   
}
