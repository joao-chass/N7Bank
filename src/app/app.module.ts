import { SaldoCardComponent } from './home/saldo-card/saldo-card.component';
import { AutenticacaoComponent } from './login/autenticacao/autenticacao.component';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    MenuTabsComponent,
    AutenticacaoComponent,
    SaldoCardComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
