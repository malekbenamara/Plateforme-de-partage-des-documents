package com.example.partage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.partage.Model.Entity.Categorie;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long>{

}
