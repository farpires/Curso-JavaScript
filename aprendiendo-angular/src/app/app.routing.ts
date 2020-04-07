//importar modulo de router de angular
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//import Componnetn
import {HomeComponent} from './home/home.component';
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { VideojuegoComponent} from './videoJuego/videoJuego.component';
import {CursoComponent} from './curso/curso.component';
import {ExternoComponent} from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


//Array de Configuracion de las routas 

const appRoutes: Routes = [
{path: '', component:HomeComponent},
{path: 'home', component:HomeComponent},
{path:'zapatillas',component:ZapatillasComponent},
{path:'videoJuego',component:VideojuegoComponent},
{path:'cursos',component:CursoComponent}, 
{path:'cursos/:nombre/:follower',component:CursoComponent}, 
{path:'externo',component: ExternoComponent},
{path:'contacto',component:ContactoComponent},
{path:'**',component:HomeComponent}
];

//Exportar el modulo de routar 
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);