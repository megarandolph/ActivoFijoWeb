import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculoDepreciacionService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  getCalculoDepreciacion(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/CalculoDepreciacion',{ headers: headers });
  }

  getCalculoDepreciacionConsulta(RangoInicial:number,RangoFinal:number,FechaInicial:any,FechaFinal:any,TipoActivo:string,Type:number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + `/CalculoDepreciacion/GETConsulta?RangoInicial=${RangoInicial}&RangoFinal=${RangoFinal}&FechaInicial=${FechaInicial}&FechaFinal=${FechaFinal}&TipoActivo=${TipoActivo}&type=${Type}`,{ headers: headers });
  }

  getCalculoDepreciacion2(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/CalculoDepreciacion/GETConsulta2',{ headers: headers });
  }

  getEnvioDepreciacion(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.get(this.url + '/CalculoDepreciacion/EnvioDepreciacion',{ headers: headers });
  }

  addCalculoDepreciacion(calculoDepreciacion: any): Observable<any> {
    let params = JSON.stringify(calculoDepreciacion);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post(this.url + '/CalculoDepreciacion', params, { headers: headers });
  }

  editCalculoDepreciacion(calculoDepreciacion: any): Observable<any> {
    let params = JSON.stringify(calculoDepreciacion);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.put(this.url + '/CalculoDepreciacion', params, { headers: headers });
  }

  deleteCalculoDepreciacion(calculoDepreciacionId: number): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.delete(this.url + '/CalculoDepreciacion?CalculoDepreciacionId='+calculoDepreciacionId, {headers: headers});
  }

  EnviarDepreciacion(Envio: any): Observable<any> {
    
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this._http.post('https://webapi220221209170127contabilidad.azurewebsites.net/api/EntradaContable', Envio, { headers: headers });
  }

  UpdateAll(): Observable<any> {
    return this._http.put(this.url + '/CalculoDepreciacion/UPDATEEstado', '');
  }
}
