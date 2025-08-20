package com.example.partage.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partage.Model.Entity.Categorie;
import com.example.partage.Repository.CategorieRepository;
import com.example.partage.Service.CategorieService;
@RestController
@RequestMapping("/api/categorie")
@CrossOrigin(origins = "http://localhost:4200") 
public class CategorieController {

    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping("/liste")
    public List<Categorie> getAllCategories() {
        return categorieRepository.findAll();
    }
    //supprimer + ajouter categorie 

    @Autowired
    private CategorieService categorieService;

    @PostMapping("/ajouter")
    public ResponseEntity<Categorie> ajouterCategorie(@RequestBody Categorie categorie) {
        Categorie nouvelle = categorieService.ajouterCategorie(categorie);
        return new ResponseEntity<>(nouvelle, HttpStatus.CREATED);
    }

    @DeleteMapping("/supprimer/{id}")
    public ResponseEntity<Void> supprimerCategorie(@PathVariable Long id) {
        categorieService.supprimerCategorie(id);
        return ResponseEntity.noContent().build();
    }

}
