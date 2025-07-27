package com.example.partage.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.partage.Model.DTO.UtilisateurDTO;
import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.UtilisateurRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UtilisateurService implements UtilisateurServiceImpl {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

// register
    @Autowired
private PasswordEncoder passwordEncoder; 

public Utilisateur enregistrerUtilisateur(UtilisateurDTO dto) {

    if (utilisateurRepository.existsByEmail(dto.getEmail())) {
        throw new RuntimeException("Email déjà utilisé");
    }

    Utilisateur utilisateur = new Utilisateur();
    utilisateur.setNom(dto.getNom());
    utilisateur.setPrenom(dto.getPrenom());
    utilisateur.setEmail(dto.getEmail());

    
    String motDePasseHache = passwordEncoder.encode(dto.getPassword());
    utilisateur.setPassword(motDePasseHache);

    utilisateur.setRole(dto.getRole());

    return utilisateurRepository.save(utilisateur);
}

    //login
     
  

    //liste des utilisateurs
    public UtilisateurService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    @Override
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }
    
  
}



