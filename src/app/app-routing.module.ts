import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatosPersonalesComponent} from "./datos-personales/datos-personales.component";
import {DetallesComponent} from "./detalles/detalles.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: 'datos', component: DatosPersonalesComponent},
  {path: 'detalles/:id', component:DetallesComponent},
  {path: 'error', component:ErrorComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
