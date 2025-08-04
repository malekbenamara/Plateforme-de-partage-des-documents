package com.example.partage.Model.DTO;

public class ChatMessage {

    private Long senderId;
    private Long receiverId;
    private String content;
    // getters/setters
    public Long getSenderId() {
    return senderId;
}

public void setSenderId(Long emetteurId) {
    this.senderId = emetteurId;
}

public Long getReceiverId() {
    return receiverId;
}

public void setReceiverId(Long recepteurId) {
    this.receiverId = recepteurId;
}

public String getContent() {
    return content;
}

public void setContent(String content) {
    this.content = content;
}


}


