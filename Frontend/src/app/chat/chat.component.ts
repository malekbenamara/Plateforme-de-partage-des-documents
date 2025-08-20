import { FormsModule } from '@angular/forms';
import {  Utilisateur } from '../model/Model';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit, OnDestroy {
  @Input() utilisateur!: Utilisateur | null;

  messages: any[] = [];
  newMessage: string = '';
  isConnected = false;

  constructor(private chatService: ApiServiceService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  conversationId = 1;
  username = 'alice';
  input = '';

  private sub?: Subscription;
/* ngOnInit(){
    this.chatService.connect();
    this.chatService.subscribeConversation(this.conversationId);
    this.sub = this.chatService.messages$.subscribe(m => this.messages.push(m));
    this.chatService.getHistory(this.conversationId).subscribe(h => this.messages = h);
  }

  send(){
    if(!this.input.trim()) return;
    this.ws.send(this.conversationId, this.username, this.input.trim());
    this.input = '';
  }

  ngOnDestroy(){ this.sub?.unsubscribe(); }
*/}
 



