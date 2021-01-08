import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DadosPorEstado } from "../models/dados-por-estado.model";

@Injectable({providedIn: 'root'})
export class DadosCovidService{
    
    private  dados$: Observable<any>;
  
    constructor(readonly httpClient: HttpClient){
    }

    private getData(): Observable<any>{
        const url = "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true";
        return this.httpClient.get(url);
    }

    getMortosPorEstado(): Observable<DadosPorEstado[]>{
        return this.getData().pipe(
            map(({deceasedByRegion}) => {
          return deceasedByRegion;
        })
        );
    }

    getInfectadosPorEstado(): Observable<DadosPorEstado[]>{
        return this.getData().pipe(
            map(({infectedByRegion}) => {
          return infectedByRegion;
        })
        );
    }

    getTotalMortos(): Observable<number>{
        return this.getData().pipe(
            map(({deceased}) => {
          return deceased;
        })
        );
    }
    
    getTotalInfectados(): Observable<number>{
        return this.getData().pipe(
            map(({infected}) => {
          return infected;
        })
        );
    }
}