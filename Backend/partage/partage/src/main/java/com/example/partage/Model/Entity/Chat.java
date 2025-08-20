package com.example.partage.Model.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Chat {


  @Id @GeneratedValue private Long id;
  private String title; // optionnel
}



