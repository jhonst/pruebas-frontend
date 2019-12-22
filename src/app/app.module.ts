import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponentComponent } from './lista-component/lista-component.component';
import { UsuariosService } from './usuarios.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatInputModule, MatButtonModule, MatTabsModule, MatSlideToggleModule,
          MatTableModule, MatButtonToggleModule, MatChipsModule, MatBadgeModule, MatGridListModule } from '@angular/material';
import { IgxAvatarModule } from 'igniteui-angular';
import { PerfilComponentComponent } from './perfil-component/perfil-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponentComponent,
    PerfilComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    IgxAvatarModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatBadgeModule,
    MatGridListModule,
    MatSlideToggleModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
