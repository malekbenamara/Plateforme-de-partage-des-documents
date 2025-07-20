package com.example.partage.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.partage.Model.DTO.UtilisateurDTO;
import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.UtilisateurRepository;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

   

    public Utilisateur enregistrerUtilisateur(UtilisateurDTO dto) {
        // Optionnel: vérifier si email existe déjà
        if (utilisateurRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email déjà utilisé");
        }

     

        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setNom(dto.getNom());
        utilisateur.setPrenom(dto.getPrenom());
        utilisateur.setEmail(dto.getEmail());
        utilisateur.setPassword(dto.getPassword());
        utilisateur.setRole(dto.getRole());

        return utilisateurRepository.save(utilisateur);
    }

}


