import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DadosPorEstado } from "../models/dados-por-estado.model";
import { DadosCovidService } from '../services/dados-covid.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  title = 'dados-covid';
  mortosPorEstado$: Observable<DadosPorEstado[]>;
  infectadosPorEstado$: Observable<DadosPorEstado[]>;
  totalInfectados$: Observable<number>;
  totalMortos$: Observable<number>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, readonly dadosCovidService: DadosCovidService) {}
  ngOnInit(){
    this.mortosPorEstado$ = this.dadosCovidService.getMortosPorEstado();
    this.infectadosPorEstado$ = this.dadosCovidService.getInfectadosPorEstado();
    this.totalInfectados$ = this.dadosCovidService.getTotalInfectados();
    this.totalMortos$ = this.dadosCovidService.getTotalMortos();
  }

}
