import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
const routes: Routes = [
  {path: '', component: PersonasComponent}, // Cuando no escribamos nada en la ruta nos muestre el componente personas
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/agregar', component: FormularioComponent},
  {path: 'personas/:id', component: FormularioComponent}, // Aquí lo estamos pasando un parametro
]

@NgModule({

  imports: [ RouterModule.forRoot( // Este es el concepto de imports
        routes
      )
  ],
  exports: [RouterModule] // Tambien necesitamos exportarlo
})
export class AppRoutingModule { }
