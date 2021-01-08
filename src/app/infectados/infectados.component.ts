import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DadosPorEstado } from "../models/dados-por-estado.model";
import { DadosCovidService } from '../services/dados-covid.service';

@Component({
  selector: 'app-infectados',
  templateUrl: './infectados.component.html',
  styleUrls: ['./infectados.component.css']
})
export class InfectadosComponent implements OnInit{
  title = 'dados-covid';
  infectadosPorEstado$: Observable<DadosPorEstado[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, readonly dadosCovidService: DadosCovidService) {}
  ngOnInit(){
    this.infectadosPorEstado$ = this.dadosCovidService.getInfectadosPorEstado();
  }

}
