export class ViewConsultaDepreciacion{
    constructor(
      public activo:string,
      public tipoActivo:string,
      public cuentaCompra:string,
      public cuentaDepreciacion:string,
      public valorCompra: number,
      public añoProceso: number,
      public montoDepreciadoAnual:number,
      public depreciacionAcumulada: number,
      public añosVida: number,
      public fechaProceso: Date,
    ){}
  }