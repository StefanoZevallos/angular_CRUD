import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioListaComponent } from './components/usuarios/usuario-lista/usuario-lista.component';
import { ModalUsuariosComponent } from './components/usuarios/modal-usuarios/modal-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioListaComponent,
    ModalUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
