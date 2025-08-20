package com.example.partage.Model.Entity;

import java.time.Instant;
import java.time.LocalDateTime;

import jakarta.persistence.*;


@Entity
@Table(name = "message")
public class Message {
    @Id 
     @Column(name = "id_message")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

  @ManyToOne(optional=false) 
  private Chat conversation;
  @Column(columnDefinition="TEXT") 
  private String content;
  private Instant sentAt = Instant.now();
    @ManyToOne
    private Utilisateur sender;
    @ManyToOne
    private Utilisateur receiver; 

    private LocalDateTime timestamp;
public Message() {
        this.timestamp = LocalDateTime.now();
}
    public Chat getConversation() {
        return conversation;
    }
    public void setConversation(Chat conv){
        this.conversation=conv;

    }
    public Utilisateur getSender() {
        return sender;
    }

    public Utilisateur getReceiver() {
        return receiver;
    }

   
public Long getId() {
    return id;
}

public void setId(Long id_message) {
    this.id = id_message;
}



public void setSender(Utilisateur sender) {
    this.sender = sender;
}

public void setReceiver(Utilisateur  receiver) {
    this. receiver =  receiver;
}

public String getContent() {
    return content;
}

public void setContent(String content) {
    this.content = content;
}

public LocalDateTime getTimestamp() {
    return timestamp;
}

public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
}


}


