class Cliente {
    nombreCliente: string;
    idCliente: number;
    correoCliente: string;
    telefonoCliente: number

    constructor(
        nombreCliente:string,idCliente:number,correoCliente:string,telefonoCliente:number
    ) {
        this.nombreCliente = nombreCliente;
        this.idCliente = idCliente
        this.correoCliente = correoCliente;
        this.telefonoCliente = telefonoCliente
    }
}