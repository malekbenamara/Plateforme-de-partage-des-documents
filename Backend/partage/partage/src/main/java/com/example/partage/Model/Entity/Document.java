package com.example.partage.Model.Entity;

import jakarta.persistence.*;

@Entity
@Table(name ="document")
public class Document {
   
    @Id
    @Column(name = "document_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String description;
     private String url;
    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

public Long getId() {
    return id;
}

public void setId(Long document_id) {
    this.id = document_id;
}


public String getNom() {
    return nom;
}

public void setNom(String nom) {
    this.nom = nom;
}

public String getDescription() {
    return description;
}

public void setDescription(String description) {
    this.description = description;
}

public String getUrl() {
    return url;
}

public void setUrl(String url) {
    this.url = url;
}
}