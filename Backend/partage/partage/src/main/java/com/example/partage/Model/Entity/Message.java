package com.example.partage.Model.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "message")
public class Message {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_message;
    private String sender;
    private String content;
    private LocalDateTime timestamp;
public Long getId_message() {
    return id_message;
}

public void setId_message(Long id_message) {
    this.id_message = id_message;
}

public String getSender() {
    return sender;
}

public void setSender(String sender) {
    this.sender = sender;
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


