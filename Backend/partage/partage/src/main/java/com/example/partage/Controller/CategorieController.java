package com.example.partage.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partage.Model.Entity.Categorie;
import com.example.partage.Repository.CategorieRepository;
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
}