package com.example.partage.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partage.Model.Entity.Document;
import com.example.partage.Service.DocumentService;
import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/document")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200") 
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @GetMapping("/categorie/{id}")
    public ResponseEntity<List<Document>> getByCategorie(@PathVariable Long id) {
        List<Document> docs = documentService.getDocumentsByCategorie(id);
        return ResponseEntity.ok(docs);
    }
}

