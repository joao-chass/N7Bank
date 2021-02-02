import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  entrar = false;
  bio = false;
  constructor(private route: Router) { }

  ngOnInit() {}


  carregando(){
    
  }

  cadastro() {
    this.route.navigateByUrl('/cadastro');
  }

}
