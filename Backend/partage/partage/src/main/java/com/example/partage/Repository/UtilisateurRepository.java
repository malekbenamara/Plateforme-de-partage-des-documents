package com.example.partage.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.partage.Model.Entity.Utilisateur;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {

    
    //register
    boolean existsByEmail(String email);
    //login
    Optional<Utilisateur> findByEmail(String email);  
    //chat
    Optional<Utilisateur> findByUsername(String nom);

}


