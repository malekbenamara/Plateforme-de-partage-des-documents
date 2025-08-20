package com.example.partage.Controller;

import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.partage.Model.Entity.Document;
import com.example.partage.Repository.DocumentRepository;
import com.example.partage.Service.DocumentService;

import java.net.MalformedURLException;
import java.net.URL;          
import java.nio.file.Path;



import org.springframework.http.HttpStatus;

import java.nio.file.Files;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins ="http://localhost:4200")
public class DocumentController {
     public DocumentController(DocumentRepository documentRepository) {
    }

    @Autowired
    private DocumentService documentService;

    @GetMapping("/categorie/{id}")
    public ResponseEntity<List<Document>> getDocumentsByCategorie(@PathVariable Long id) {
        List<Document> docs = documentService.getDocumentsByCategorieId(id);
        return ResponseEntity.ok(docs);
    }

 @Value("${file.upload-dir}")
    private String uploadDir;

    @Autowired
    private DocumentRepository documentRepo;

    // Upload
@GetMapping("/download/{id}")
public ResponseEntity<Resource> downloadFile(@PathVariable Long id) {
    Optional<Document> docOpt = documentRepo.findById(id);
    if (docOpt.isEmpty()) {
        return ResponseEntity.notFound().build();
    }

    Document doc = docOpt.get();
    String fileUrl = doc.getUrl();

    try {
        Resource resource;
        String filename;
        String contentType = "application/octet-stream"; 
        if (fileUrl.startsWith("http://") || fileUrl.startsWith("https://")) {
            URL url = new URL(fileUrl);
            resource = new UrlResource(url);
            filename = Paths.get(url.getPath()).getFileName().toString();
        } else {
            Path path = Paths.get(fileUrl);
            resource = new UrlResource(path.toUri());
            filename = path.getFileName().toString();
        }

        if (!resource.exists() || !resource.isReadable()) {
            return ResponseEntity.notFound().build();
        }

        String ext = "";

        int i = filename.lastIndexOf('.');
        if (i > 0) {
            ext = filename.substring(i + 1).toLowerCase();
        }

        switch (ext) {
            case "pdf": contentType = "application/pdf"; break;
            case "xls": 
            case "xlsx": contentType = "application/vnd.ms-excel"; break;
            case "doc":
            case "docx": contentType = "application/msword"; break;
            case "jpg":
            case "jpeg": contentType = "image/jpeg"; break;
            case "png": contentType = "image/png"; break;
            case "gif": contentType = "image/gif"; break;
            case "txt": contentType = "text/plain"; break;
          
        }

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
            .header(HttpHeaders.CONTENT_TYPE, contentType)
            .body(resource);

    } catch (MalformedURLException e) {
        e.printStackTrace();
        return ResponseEntity.badRequest().build();
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}

@DeleteMapping("/{id}")
public ResponseEntity<?> deleteDocument(@PathVariable Long id) {
    Optional<Document> optionalDoc = documentRepo.findById(id);

    if (optionalDoc.isEmpty()) {
        return ResponseEntity.notFound().build();
    }

    Document doc = optionalDoc.get();

    try {
        String url = doc.getUrl();
        // Si l'URL n'est pas une URL distante, alors on supprime le fichier physique
        if (url != null && !url.isBlank() && !url.startsWith("http")) {
            Path filePath = Paths.get(uploadDir).resolve(url).normalize();
            Files.deleteIfExists(filePath);
        }

        documentRepo.deleteById(id);
        return ResponseEntity.noContent().build();

    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Erreur de suppression : " + e.getMessage());
    }
}
///////////////////

    @PostMapping("/ajouter/{id}")
    public ResponseEntity<Document> ajouterDocument(
            @RequestBody Document document,
            @PathVariable Long categorieId) {
        
        Document saved = documentService.ajouterDocument(document, categorieId);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}


