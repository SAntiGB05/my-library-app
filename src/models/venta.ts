class Venta {
    codVenta: number
    cantidad: number
    fecha: Date
    subTotal: number
    total: number

    constructor(
        codVenta:number,
        cantidad:number,
        fecha:Date,
        subTotal:number,
        total: number
    ){
        this.codVenta = codVenta
        this.cantidad = cantidad
        this.fecha = fecha
        this.subTotal = subTotal
        this.total = total
    }
}