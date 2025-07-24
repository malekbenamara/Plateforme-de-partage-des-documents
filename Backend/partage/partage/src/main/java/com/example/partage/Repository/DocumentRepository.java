package com.example.partage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.partage.Model.Entity.Document;

@Repository   
public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findByCategorieId(Long categorieId);
}



