package com.example.partage.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.partage.Model.Entity.Utilisateur;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {

    // Optionnel: pour vérifier si email existe déjà
    //register
    boolean existsByEmail(String email);
    

}


