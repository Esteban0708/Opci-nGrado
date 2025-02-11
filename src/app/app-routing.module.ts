import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearConvocatoriaComponent } from './view/crear-convocatoria/crear-convocatoria.component';
import { VerConvocatoriasComponent } from './view/ver-convocatorias/ver-convocatorias.component';
import { VerConvocatoriaComponent } from './view/ver-convocatoria/ver-convocatoria.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { InscripcionGrupoComponent } from './view/inscripcion-grupo/inscripcion-grupo.component';

const routes: Routes = [
  { path : '', redirectTo:'/principal', pathMatch: 'full'},
  { path : 'crear-convocatoria', component: CrearConvocatoriaComponent},
  { path : 'ver-convocatorias', component: VerConvocatoriasComponent},
  { path: 'ver-convocatoria', component: VerConvocatoriaComponent },
  { path : 'inscripcion-grupo', component: InscripcionGrupoComponent},
  { path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
