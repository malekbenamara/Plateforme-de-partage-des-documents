import { FormsModule } from '@angular/forms';
import {  Message, Utilisateur } from '../model/Model';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';
 import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements  OnInit{
   @Input() utilisateur!: any; // Assure-toi que le type correspond à ton modèle
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
sendMessage() {
throw new Error('Method not implemented.');
}
messages: any;
currentUserId: any;
newMessage: any;

  
}