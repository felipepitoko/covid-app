import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { InfectadosComponent } from './infectados/infectados.component';
import { MortosComponent } from './mortos/mortos.component';
import { DadosGeraisComponent} from './dados-gerais/dados-gerais.component';

const routes: Routes = [
  {path: 'mortos-component', component: MortosComponent},
  {path: 'infectados-component', component: InfectadosComponent},
  {path: 'dadosGerais-component', component: DadosGeraisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
