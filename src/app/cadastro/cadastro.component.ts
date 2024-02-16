import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) {}

  cadastrar(): void {
    // Chame o serviço de autenticação para realizar o cadastro
    this.authService.cadastrar(this.nome, this.email, this.senha);
  }
}
