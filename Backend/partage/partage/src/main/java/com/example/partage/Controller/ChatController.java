package com.example.partage.Controller;

import org.springframework.web.bind.annotation.*;

import com.example.partage.Model.DTO.ChatMessage;
import com.example.partage.Model.Entity.Message;
import com.example.partage.Repository.ChatRepository;
import com.example.partage.Repository.MessageRepository;
import com.example.partage.Repository.UtilisateurRepository;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:4200")

public class ChatController {
  private final SimpMessagingTemplate messagingTemplate;
  private final MessageRepository messageRepo;
  private final ChatRepository convoRepo;
  private final UtilisateurRepository userRepo;

  public ChatController(SimpMessagingTemplate t, MessageRepository m, ChatRepository c, UtilisateurRepository u){
    this.messagingTemplate = t; this.messageRepo = m; this.convoRepo = c; this.userRepo = u;
  }

  // Envoi temps réel (STOMP)
  @MessageMapping("/chat.sendMessage")
  public void send(ChatMessage msg){
    var conv = convoRepo.findById(msg.conversationId()).orElseThrow();
    var user = userRepo.findByUsername(msg.sender()).orElseThrow();
    var entity = new Message();
    entity.setConversation(conv);
    entity.setSender(user);
    entity.setContent(msg.content());
    entity.setSender(Instant.now());
    messageRepo.save(entity);
    messagingTemplate.convertAndSend("/topic/chat/"+msg.conversationId(), msg);
  }

  // Historique REST
  @GetMapping("/conversations/{id}/messages")
  public List<Message> history(@PathVariable Long id){
    return messageRepo.findByConversationIdOrderBySentAtAsc(id);
  }
}

