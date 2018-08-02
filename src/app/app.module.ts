import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
