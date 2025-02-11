import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './view/menu/menu.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { CrearConvocatoriaComponent } from './view/crear-convocatoria/crear-convocatoria.component';
import { VerConvocatoriasComponent } from './view/ver-convocatorias/ver-convocatorias.component';
import { InscripcionGrupoComponent } from './view/inscripcion-grupo/inscripcion-grupo.component';
import { VerConvocatoriaComponent } from './view/ver-convocatoria/ver-convocatoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    CrearConvocatoriaComponent,
    VerConvocatoriasComponent,
    InscripcionGrupoComponent,
    VerConvocatoriaComponent
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
