import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppComponent } from './app.component'; // Certifique-se de que o AppComponent esteja importado corretamente aqui

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  // Outras rotas...
];

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    // Remova AppComponent daqui
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent] // Se certifique de que o AppComponent esteja incluído aqui
})
export class AppModule { }
