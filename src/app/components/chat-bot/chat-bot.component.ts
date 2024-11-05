import { Component } from '@angular/core';
import { ChatBotService } from '../../services/chat-bot.service';
import { Message } from '../../interfaces/message';


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {

  isChatbotOpen: boolean = false;

  rotation = 0; // Initial rotation angle
  rotationStyle = 'rotate(0deg)';

  public message: string = '';
  public messages: Message[] = [];
  public data: string = '';
  loading = false;

  constructor(private chatBotService: ChatBotService) { }

  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
    this.rotation += 180; // Increment rotation by 90 degrees
     this.rotationStyle = `rotate(${this.rotation}deg)`; // Update the transform style
  }

  closeChatbot() {
    this.isChatbotOpen = false;
    this.rotation = 0; // Reset rotation to 0 degrees
    this.rotationStyle = 'rotate(0deg)'; // Update the transform style
  }


  sendMessage() {
    this.data = this.message;
    this.messages.push({ 
      user: 'user', 
      message: this.message
    });

     this.loading = true

    setTimeout(() => {
      this.message = '';
      this.chatBotService.sendMessage(this.data).subscribe((data: any) => {
        this.messages.push(data);
        this.loading = false;     
      });
    }, 5000); 
  }  
}
