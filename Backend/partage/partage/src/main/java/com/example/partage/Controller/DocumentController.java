package com.example.partage.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partage.Model.Entity.Document;
import com.example.partage.Service.DocumentService;


@RestController
@RequestMapping("/api/document")
@CrossOrigin(origins = "http://localhost:4200") 
public class DocumentController {

    private final DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @GetMapping("/categories/{id}/documents")
    public List<Document> getDocumentsByCategorie(@PathVariable Long id) {
        return documentService.findByCategorieId(id);
    }
    
}





