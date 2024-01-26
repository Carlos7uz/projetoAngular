// Servicos do modulo messages

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private messages: string[] = [];

  // adiciona a menssage
  add(message: string): void {
    this.messages.push(message);

  }

  // limpa as messages
  clear(): void {
    this.messages = [];
  }

  // pega as messages e adiciona a variavels messages
  getMessages(): string[] {
    return this.messages;
  }

}
