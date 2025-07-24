package com.example.partage.Controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.example.partage.Model.Entity.Message;

@Controller
public class ChatController {
    @Autowired private SimpMessagingTemplate template;

    @MessageMapping("/chat")
    public void processMessage(Message msg) {
        msg.setTimestamp(LocalDateTime.now());
        template.convertAndSend("/topic/messages", msg);
    }
}



