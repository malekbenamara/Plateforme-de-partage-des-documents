package com.example.partage.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.partage.Model.DTO.AuthResponse;
import com.example.partage.Model.DTO.LoginRequest;
import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.UtilisateurRepository;
import com.example.partage.Security.JwtUtil;

@Service
public class AuthService {
    @Autowired private UtilisateurRepository repo;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private PasswordEncoder encoder;

    
    public AuthResponse login(LoginRequest req) {
    Utilisateur user = repo.findByEmail(req.getEmail())
        .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

    if (!encoder.matches(req.getPassword(), user.getPassword())) {
        throw new RuntimeException("Mot de passe incorrect");
    }

    String token = jwtUtil.generateToken(user.getEmail());
    return new AuthResponse(token);
}


}

