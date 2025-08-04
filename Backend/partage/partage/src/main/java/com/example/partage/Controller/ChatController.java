package com.example.partage.Controller;

import org.springframework.web.bind.annotation.*;

import com.example.partage.Model.Entity.Message;
import com.example.partage.Repository.MessageRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatController {
  MessageRepository repo;
@MessageMapping("/chat.sendMessage")
@SendTo("/topic/public")
public Message sendMessage(@Payload Message chatMessage) {

    Message message = new Message();
    message.setContent(chatMessage.getContent());
    message.setSender(chatMessage.getSender());
    message.setTimestamp(LocalDateTime.now());

    repo.save(message); // Enregistre l'entité JPA Message
    return chatMessage; // Continue d'envoyer ChatMessage via WebSocket
}

}
