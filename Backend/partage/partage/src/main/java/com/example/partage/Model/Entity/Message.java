package com.example.partage.Model.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "message")
public class Message {
    @Id 
     @Column(name = "id_message")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Utilisateur sender;
    @ManyToOne
    private Utilisateur receiver; 
    private String content;
    private LocalDateTime timestamp;
public Message() {
        this.timestamp = LocalDateTime.now();
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


