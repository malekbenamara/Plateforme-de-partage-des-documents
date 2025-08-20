package com.example.partage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.partage.Model.Entity.Chat;

public interface ChatRepository extends JpaRepository<Chat,Long>  {

}
