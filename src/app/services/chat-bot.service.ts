import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  public apiUrl = Environment.apiUrl;

  constructor(private http: HttpClient) { }

  public sendMessage(message: string) {
    return this.http.post(this.apiUrl, { message: message });
  }
}