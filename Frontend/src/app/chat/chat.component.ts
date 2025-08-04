import { FormsModule } from '@angular/forms';
import {  ChatMessage, Message, Utilisateur } from '../model/Model';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnChanges, OnInit {
  @Input() utilisateur!: Utilisateur | null;

  messages: any[] = [];
  newMessage: string = '';
  isConnected = false;

  constructor(private chatService: ApiServiceService) {}

  ngOnInit(): void {
    // Optionnel : charger sans utilisateur
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['utilisateur'] && this.utilisateur) {
      console.log('Utilisateur reçu :', this.utilisateur);
      this.loadChat(this.utilisateur.id!);

      if (!this.isConnected) {
        this.chatService.connect((message: any) => {
          this.messages.push(message);
        });
        this.isConnected = true;
      }
    }
  }

  loadChat(userId: number) {
    // Tu peux ici appeler une API pour charger les messages de la BDD
    // Pour l’instant : messages simulés
    this.messages = [
      { fromUser: this.utilisateur?.nom, text: 'Bonjour !' },
      { fromUser: 'Moi', text: 'Salut, comment ça va ?' }
    ];
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.utilisateur) return;

    const message = {
      fromUser: this.utilisateur.nom,
      text: this.newMessage,
      timestamp: new Date()
    };

    this.messages.push(message); // affichage immédiat
    this.chatService.sendMessage(message); // envoi au serveur
    this.newMessage = '';
  }
}


