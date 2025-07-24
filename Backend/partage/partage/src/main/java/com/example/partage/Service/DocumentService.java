package com.example.partage.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.partage.Model.Entity.Document;
import com.example.partage.Repository.DocumentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DocumentService {
     @Autowired
    private final DocumentRepository documentRepository;

    public List<Document> getDocumentsByCategorie(Long categorieId) {
        return documentRepository.findByCategorieId(categorieId);
    }
}


