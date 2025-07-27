package com.example.partage.Service;

import com.example.partage.Model.Entity.Document;
import com.example.partage.Repository.DocumentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService {
    private final DocumentRepository repo;

    public DocumentService(DocumentRepository repo) {
        this.repo = repo;
    }

    public List<Document> findByCategorieId(Long categorieId) {
        return repo.findByCategorieId(categorieId);
    }
    public Document addDocument(Document document) {
        return repo.save(document);
    }

}
