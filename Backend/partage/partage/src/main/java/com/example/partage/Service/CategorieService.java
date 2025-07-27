package com.example.partage.Service;

import java.util.List;
import java.util.Optional;

import com.example.partage.Model.Entity.Categorie;
import com.example.partage.Repository.CategorieRepository;

public class CategorieService implements CategorieServiceImpl {
    private CategorieRepository categ;
    private     CategorieRepository repo ;
    //liste des categories
    public CategorieService(CategorieRepository categorieRepository) {
        this.categ = categorieRepository;
    }

    @Override
    public List<Categorie> getAllCategories() {
        return categ.findAll();
    }
    public Optional<Categorie> findById(Long id) {
        return repo.findById(id);
    }


}
