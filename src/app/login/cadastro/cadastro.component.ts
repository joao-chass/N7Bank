import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  value = 0;
  conversas = [];
  carregando; 
  constructor() { }

  ngOnInit() {
    this.chat();
  }

  chat() {
    this.value += 1;
    this.carregando = true;
    setTimeout(() => {

      switch (this.value) {
        case 1:
          this.conversas.push(`Olá 😀`);
          this.chat();
          break;
          case 2:
            this.conversas.push("Que bom ver voce aqui!");
      
            this.chat();
            break;
            case 3:
              this.conversas.push(`As Contas C6 são sempre atreladas ai seu CPF seja para acessar
              uma conta pesssal (PF) ou empresarial (PJ)`);
          
              this.chat();
              break;
              case 4:
                this.conversas.push("Qual é o seu CPF");
                this.carregando = false;
                break;
      
        default:
          break;
      }
    }, 1000);
    }

 
}
