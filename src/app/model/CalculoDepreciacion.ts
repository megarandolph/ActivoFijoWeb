export class CalculoDepreciacion{
  constructor(
    public calculoDepreciacionId: number,
    public añoProceso: number,
    public activoFijoId:number,
    public fechaProceso:string,
    public montoDepreciadoAnual: number,
    public depreciacionAcumulada: number,
    public cuentaCompra: number,
    public cuentaDepreciacion: number,
    public añosVida: number,
  ){}
}
