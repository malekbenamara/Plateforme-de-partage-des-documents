package com.example.partage.Model.Entity;

import jakarta.persistence.*;
@Entity
@Table(name = "categorie")
public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categorie_id;
    private String nom;
    
    public Categorie() {}
    public Categorie(String nom) {
        this.nom = nom;
    }  
    public Long getId() { return categorie_id; }
    public void setId(Long id) { this.categorie_id = id; }

    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

}


