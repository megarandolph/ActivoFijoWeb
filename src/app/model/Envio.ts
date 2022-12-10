export class Envio{
    constructor(
      public iD_ASIENTO: number,
      public descripcion: string,
      public identificadoR_AUX: string,
      public cuenta:string,
      public tipomov:string,
      public fechaasiento: string,
      public montoasiento: number,
      public estado: string
    ){}
  }
