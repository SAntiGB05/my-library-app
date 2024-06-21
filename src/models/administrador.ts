class Administrador {
    nombreAdministardor: string;
    idAdministrador: number;
    correoAdministrador: string;
    telefonoAdministrador: number

    constructor(
        nombreAdministardor:string,idAdministrador:number,correoAdministrador:string,telefonoAdministrador:number
    ) {
        this.nombreAdministardor = nombreAdministardor;
        this.idAdministrador = idAdministrador
        this.correoAdministrador = correoAdministrador;
        this.telefonoAdministrador = telefonoAdministrador
    }
}