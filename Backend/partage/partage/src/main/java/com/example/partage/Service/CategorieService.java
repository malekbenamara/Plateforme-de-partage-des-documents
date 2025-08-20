package com.example.partage.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.partage.Model.Entity.Categorie;
import com.example.partage.Repository.CategorieRepository;
@Service
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
//Supprimer categorie +ajouter un categorie

    @Autowired
    private CategorieRepository categorieRepository;

    public Categorie ajouterCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public void supprimerCategorie(Long id) {
        categorieRepository.deleteById(id);
    }

    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }
}



