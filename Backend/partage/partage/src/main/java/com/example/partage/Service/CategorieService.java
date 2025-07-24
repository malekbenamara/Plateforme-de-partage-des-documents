package com.example.partage.Service;

import java.util.List;

import com.example.partage.Model.Entity.Categorie;
import com.example.partage.Repository.CategorieRepository;

public class CategorieService implements CategorieServiceImpl {
    private CategorieRepository categ;
    //liste des categories
    public CategorieService(CategorieRepository categorieRepository) {
        this.categ = categorieRepository;
    }

    @Override
    public List<Categorie> getAllCategories() {
        return categ.findAll();
    }


}
