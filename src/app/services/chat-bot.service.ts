import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor(private http: HttpClient) { }

  public sendMessage() {
    return this.http.get('');
  }
}

//Slutade på 8:39 i videon
