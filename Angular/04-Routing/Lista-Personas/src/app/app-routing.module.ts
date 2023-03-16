import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component: PersonasComponent}, // Cuando no escribamos nada en la ruta nos muestre el componente personas
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/agregar', component: FormularioComponent},
  {path: 'personas/:id', component: FormularioComponent} // Aquí lo estamos pasando un parametro
]

@NgModule({
  imports: [RouterModule.forRoot( // Este es el concepto de imports, se usa para las rutas principales.
    routes
  )],
  exports:[RouterModule] // Tambien necesitamos exportarlo
})

// @NgModule({
//     imports: [
//         RouterModule.forChild([ // Se utiliza para especificar las rutas secundarias
//             {
//                 canActivate: [AuthGuard],
//                 path: 'customer-data',
//                 component: IndexCustomerDataComponent,
//             },
//             {
//                 canActivate: [AuthGuard],
//                 path: "statistics",
//                 component: StatisticsCustomerComponent,
//             },
//             {
//                 path: '',
//                 redirectTo: 'customer-data',
//                 pathMatch: 'full', // valor 'prefix' cuando buscan una coincidencia de la ruta y 'full' coincidencia exacta con la ruta. 
//             },
//             {
//                 path: "**",
//                 redirectTo: "customer-data",
//             },
//         ]),
//     ],
//     exports: [RouterModule],
// })
export class AppRoutingModule { }
