package com.example.partage.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.example.partage.Model.Entity.Categorie;
import com.example.partage.Model.Entity.Document;
import com.example.partage.Repository.CategorieRepository;
import com.example.partage.Repository.DocumentRepository;


@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    public List<Document> getDocumentsByCategorieId(Long id) {
        return documentRepository.findByCategorieId(id);
    
    }

    public Resource downloadDocument(Long id) throws IOException {
        Document doc = documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Document not found with id: " + id));

        Path path = Paths.get(doc.getUrl());
        return new UrlResource(path.toUri());
    }
    
    public Optional<Document> getDocumentById(Long id) {
        return documentRepository.findById(id);
    }

    public String getDocumentName(Long id) {
        return documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Document not found"))
                .getNom();
    }

    public void deleteDocument(Long id) {
        if (!documentRepository.existsById(id)) {
            throw new RuntimeException("Document not found for deletion");
        }
        documentRepository.deleteById(id);
    }
    ///////////
    


    @Autowired
    private CategorieRepository categorieRepository;

    public Document ajouterDocument(Document document, Long categorieId) {
        Categorie categorie = categorieRepository.findById(categorieId)
            .orElseThrow(() -> new RuntimeException("Catégorie introuvable"));

        document.setCategorie(categorie);
        return documentRepository.save(document);
    }
}




  




