import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosPorEstado } from './models/dados-por-estado.model';
import { DadosCovidService } from './services/dados-covid.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dados-covid';
  mortosPorEstado$: Observable<DadosPorEstado[]>;
  infectadosPorEstado$: Observable<DadosPorEstado[]>;
  totalInfectados$: Observable<number>;
  totalMortos$: Observable<number>;

  constructor(readonly dadosCovidService: DadosCovidService){
  }
  
  ngOnInit(){
    this.mortosPorEstado$ = this.dadosCovidService.getMortosPorEstado();
    this.infectadosPorEstado$ = this.dadosCovidService.getInfectadosPorEstado();
    this.totalInfectados$ = this.dadosCovidService.getTotalInfectados();
    this.totalMortos$ = this.dadosCovidService.getTotalMortos();
  }
}
