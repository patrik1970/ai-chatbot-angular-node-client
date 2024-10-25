import { Component } from '@angular/core';
import { ChatBotService } from '../../services/chat-bot.service';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {

  public message: string = '';
  public messages: Message[] = [];
  public data: string = '';

  constructor(private chatBotService: ChatBotService) { }

  public sendMessage() {
    this.data = this.message;
    this.messages.push({ 
      user: 'user', 
      message: this.message
    });
    this.message = '';
    this.chatBotService.sendMessage(this.data).subscribe((data: any) => {
      this.messages.push(data);      
    });
  }
}
