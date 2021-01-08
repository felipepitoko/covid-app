import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { DadosCovidService } from '../services/dados-covid.service';
import { DadosPorEstado } from "../models/dados-por-estado.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mortos',
  templateUrl: './mortos.component.html',
  styleUrls: ['./mortos.component.css']
})
export class MortosComponent implements OnInit {
  title = 'dados-covid';
  mortosPorEstado$: Observable<DadosPorEstado[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver, readonly dadosCovidService: DadosCovidService) {}
    ngOnInit(){
      this.mortosPorEstado$ = this.dadosCovidService.getMortosPorEstado();
    }


}
