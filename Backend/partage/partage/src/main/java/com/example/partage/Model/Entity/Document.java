package com.example.partage.Model.Entity;

import jakarta.persistence.*;

@Entity
@Table(name ="document")
public class Document {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documen_id;

    private String nom;
    private String description;
    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;


    public Long getId() {
        return documen_id;
    }

        public void setId(Long id) {
            this.documen_id = id;
        }

        public String getNom() {
            return nom;
        }

        public void setNom(String titre) {
            this.nom = titre;
        }

        public Categorie getCategorie() {
            return categorie;
        }

        public void setCategorie(Categorie categorie) {
            this.categorie = categorie;
        }

            
}



