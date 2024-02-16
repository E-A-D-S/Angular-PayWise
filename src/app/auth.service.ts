// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, senha: string): void {
    this.http.post('/api/login', { email, senha }).subscribe(
      response => {
        console.log('Login realizado com sucesso!', response);
        // Implemente qualquer lógica necessária após o login
      },
      error => {
        console.error('Erro ao realizar login:', error);
        // Lide com o erro de forma apropriada, como exibir uma mensagem de erro para o usuário
      }
    );
  }

  cadastrar(nome: string, email: string, senha: string): void {
    this.http.post('/api/cadastrar', { nome, email, senha }).subscribe(
      response => {
        console.log('Cadastro realizado com sucesso!', response);
        // Implemente qualquer lógica necessária após o cadastro
      },
      error => {
        console.error('Erro ao cadastrar:', error);
        // Lide com o erro de forma apropriada, como exibir uma mensagem de erro para o usuário
      }
    );
  }
}
