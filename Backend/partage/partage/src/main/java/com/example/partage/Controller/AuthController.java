package com.example.partage.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.UtilisateurRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private UtilisateurRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

   @PostMapping("/login")
public Response login(@RequestBody Utilisateur loginRequest) {
    return userRepository.findByEmail(loginRequest.getEmail())
        .map(user -> {
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return new Response(true, "Connexion réussie", user.getRole().name()); 
            } else {
                return new Response(false, "Mot de passe incorrect", null);
            }
        })
        .orElse(new Response(false, "Utilisateur non trouvé", null));
}

  static class Response {
    public boolean success;
    public String message;
    public String role;

    public Response(boolean success, String message, String role) {
        this.success = success;
        this.message = message;
        this.role = role;
    }
}

}




