import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome: String = 'Linus Torvalds'

  dados = {
    email: 'linus.torvalds@linux.com',
    profissao: 'Programador',
    acesso: 'Admin'
  }

  title = 'primeiro-projeto';
}
