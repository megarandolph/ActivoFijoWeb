import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Envio } from 'src/app/model/Envio';
import { ViewConsultaDepreciacion } from 'src/app/model/ViewConsultaDepreciacion';
import { CalculoDepreciacionService } from 'src/app/Services/calculo-depreciacion.service';
import { global } from 'src/app/Services/Global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css'],
  providers: [CalculoDepreciacionService]
})
export class EnvioComponent implements OnInit {

  public url: any;
  public depreciacions: Array<ViewConsultaDepreciacion>;
  public Envio: Envio;

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
    private _depreciacionService: CalculoDepreciacionService
  ) {     this.depreciacions = []}

  ngOnInit(): void {
    this.url = global.url;
    this.getDepreciacion();
  }
  
  getDepreciacion() {
    
    this._depreciacionService.getCalculoDepreciacion2().subscribe({
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

  getEnvio() {
    
    this._depreciacionService.getEnvioDepreciacion().subscribe({
      next:(res)=>{
        if (res.singleData
        ) {
          this.Envio = res.singleData
          this._depreciacionService.EnviarDepreciacion(this.Envio).subscribe({
            next:(res)=>{
              if (res[0].HttpCode == 200
              ) {
                this._depreciacionService.UpdateAll().subscribe({
                  next:(res)=>{
                    if (res.succeded == true
                    ) {
                      Swal.fire({
                        icon: 'success',
                        title: 'Se envio correctamente',
                        
                      })
                    }else{
      
                      Swal.fire({
                        icon: 'error',
                        title: 'Ha ocurrido un error',
                        text: res.errors[0]
                      })
                    }
                  }
                })                
              }else{

                Swal.fire({
                  icon: 'error',
                  title: 'Ha ocurrido un error',
                  text: res[0].Text
                })
              }
            }
          })
        }
        else{
      
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            text: res.errors[0]
          })
        }
      }
    })
  }

}
