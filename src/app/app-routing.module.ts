import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CrearConvocatoriaComponent } from './crear-convocatoria/crear-convocatoria.component';
import { VerConvocatoriasComponent } from './ver-convocatorias/ver-convocatorias.component';
import { VerConvocatoriaComponent } from './ver-convocatoria/ver-convocatoria.component';

const routes: Routes = [
  { path : '', redirectTo:'/principal', pathMatch: 'full'},
  { path : 'crear-convocatoria', component: CrearConvocatoriaComponent},
  { path : 'ver-convocatorias', component: VerConvocatoriasComponent},
  { path : 'ver-convocatoria', component: VerConvocatoriaComponent},
  { path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
