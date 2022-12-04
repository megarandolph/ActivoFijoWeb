import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculoDepreciacion } from 'src/app/model/CalculoDepreciacion';
import { TipoActivo } from 'src/app/model/TipoActivos';
import { ViewConsultaDepreciacion } from 'src/app/model/ViewConsultaDepreciacion';
import { CalculoDepreciacionService } from 'src/app/Services/calculo-depreciacion.service';
import { global } from 'src/app/Services/Global';
import { TipoActivoService } from 'src/app/Services/tipo-activo.service';

@Component({
  selector: 'app-view-consulta-depreciacion',
  templateUrl: './view-consulta-depreciacion.component.html',
  styleUrls: ['./view-consulta-depreciacion.component.css'],
  providers: [CalculoDepreciacionService,TipoActivoService]
})
export class ViewConsultaDepreciacionComponent implements OnInit {

  public url: any;
  public depreciacion: CalculoDepreciacion;
  public TipoActivos: Array<TipoActivo>;
  public depreciacions: Array<ViewConsultaDepreciacion>;

  public form: FormGroup = new FormGroup({
    RangoInicial: new FormControl(0),
    RangoFinal: new FormControl(0),
    FechaInicial: new FormControl(''),
    FechaFinal: new FormControl(''),
    TipoActivo: new FormControl(''),
    Type: new FormControl(0)
  });

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _depreciacionService: CalculoDepreciacionService,
    private _TipoService: TipoActivoService,
  ) {     this.depreciacions = [], this.TipoActivos =[]}

  ngOnInit(): void {
    this.url = global.url;
    this.getDepreciacion();
    this.getTipo();
  }
  
  getDepreciacion() {
    
    this._depreciacionService.getCalculoDepreciacionConsulta(this.form.value.RangoInicial,this.form.value.RangoFinal,this.form.value.FechaInicial,this.form.value.FechaFinal,this.form.value.TipoActivo,this.form.value.Type).subscribe({
      next:(res)=>{
        if (res.dataList
        ) {
          this.depreciacions = res.dataList
        }
      },
      error:(err)=>{
        console.log(err);
      }
  })
  }

  getTipo() {
    this._TipoService.getTipoActivos().subscribe({
      next:(res)=>{
        if (res.dataList) {
          this.TipoActivos = res.dataList
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  Clear(){
    this.form.patchValue({
      RangoInicial: 0,
      RangoFinal: 0,
      FechaInicial: '',
      FechaFinal: '',
      TipoActivo: '',
      Type: 0
    })
  }
}
