package com.example.partage.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.partage.Model.DTO.UtilisateurDTO;
import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.UtilisateurRepository;
import com.example.partage.Service.UtilisateurService;

@RestController
@RequestMapping("/api/utilisateur")
@CrossOrigin(origins = "http://localhost:4200") // Autorise Angular qui tourne sur 4200
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    // API pour ajouter/enregistrer un utilisateur
    @PostMapping
    public ResponseEntity<Utilisateur> ajouterUtilisateur(@RequestBody UtilisateurDTO utilisateurDTO) {
        Utilisateur utilisateur = utilisateurService.enregistrerUtilisateur(utilisateurDTO);
        return ResponseEntity.ok(utilisateur);
    }
    //API liste 
     @Autowired
    private UtilisateurRepository utilisateurRepository;
    @GetMapping("/liste")
    public List<Utilisateur> getUtilisateurs() {
        return utilisateurRepository.findAll();
    }
}