package com.example.partage.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import com.example.partage.Model.DTO.UtilisateurDTO;
import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.UtilisateurRepository;
import com.example.partage.Service.UtilisateurService;
import com.example.partage.Service.UtilisateurServiceImpl;

@RestController
@RequestMapping("/api/utilisateur")
@CrossOrigin(origins = "http://localhost:4200") 
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    // API pour register
    @PostMapping
    public ResponseEntity<Utilisateur> ajouterUtilisateur(@RequestBody UtilisateurDTO utilisateurDTO) {
        Utilisateur utilisateur = utilisateurService.enregistrerUtilisateur(utilisateurDTO);
        return ResponseEntity.ok(utilisateur);
    }
    //API pour login
    @Autowired
    private AuthenticationManager authenticationManager;


    
    //API pour liste des 
        private final UtilisateurServiceImpl utilisateurService2;

    public UtilisateurController(UtilisateurServiceImpl utilisateurService) {
        this.utilisateurService2 = utilisateurService;
    }
     @Autowired
    private UtilisateurRepository utilisateurRepository;

    @GetMapping("/liste")
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }
}
   

