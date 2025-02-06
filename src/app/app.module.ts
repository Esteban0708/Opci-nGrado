import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearConvocatoriaComponent } from './crear-convocatoria/crear-convocatoria.component';
import { VerConvocatoriasComponent } from './ver-convocatorias/ver-convocatorias.component';
import { InscripcionGrupoComponent } from './inscripcion-grupo/inscripcion-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    CrearConvocatoriaComponent,
    VerConvocatoriasComponent,
    InscripcionGrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
