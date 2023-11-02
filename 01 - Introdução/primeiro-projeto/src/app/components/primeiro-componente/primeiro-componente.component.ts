import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent {

  nome: String = 'Victor'
  idade: number = 19
  profissao: String = 'Programador'

}
