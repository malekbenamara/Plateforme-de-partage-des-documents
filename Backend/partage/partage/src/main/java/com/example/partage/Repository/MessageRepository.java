package com.example.partage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.partage.Model.Entity.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
      List<Message> findBySenderAndReceiverOrReceiverAndSenderOrderByTimestamp(
          String sender, String receiver, String receiver2, String sender2);
}



