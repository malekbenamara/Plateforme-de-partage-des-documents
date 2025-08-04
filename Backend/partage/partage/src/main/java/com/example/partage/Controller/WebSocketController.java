package com.example.partage.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import com.example.partage.Model.Entity.Message;
import com.example.partage.Model.DTO.ChatMessage;
import com.example.partage.Model.Entity.Utilisateur;
import com.example.partage.Repository.MessageRepository;
import com.example.partage.Repository.UtilisateurRepository;

@Component
public class WebSocketController {
    
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UtilisateurRepository employeRepository;

    @MessageMapping("/chat.sendMessage")
    public void sendMessage(ChatMessage chatMessage) {
        // Sauvegarder en BD
        Utilisateur emetteur = employeRepository.findById(chatMessage.getSenderId()).orElseThrow();
        Utilisateur recepteur = employeRepository.findById(chatMessage.getReceiverId()).orElseThrow();

        Message message = new Message();
        message.setSender(emetteur);
        message.setReceiver(recepteur);
        message.setContent(chatMessage.getContent());
        messageRepository.save(message);

        // Envoyer le message à la destination (topic spécifique au recepteur)
        messagingTemplate.convertAndSend("/topic/messages/" + chatMessage.getReceiverId(), chatMessage);
    }
}



