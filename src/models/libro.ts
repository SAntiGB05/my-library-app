export class Libro {
    titulo: string 
    autor: string 
    genero: string
    idioma: string
    precio: number 
    formato: string 
    isbn: string 
    descripcion: string 
    estado: string 
    ubicacion:  string 
    fecha_publicacion: number 
    editorial: string 
    paginas:number 
    dimensiones: string 
    peso: string 
    disponible: boolean

    constructor(
        titulo:string,
        autor:string,
        genero:string,
        idioma: string,
        precio: number,
        formato: string, 
        isbn: string,
        descripcion: string, 
        estado: string, 
        ubicacion:  string, 
        fecha_publicacion: number, 
        editorial: string, 
        paginas:number, 
        dimensiones: string, 
        peso: string, 
        disponible: boolean 
    ){
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.idioma = idioma
        this.precio = precio
        this.formato = formato
        this.isbn = isbn
        this.descripcion = descripcion
        this.estado = estado
        this.ubicacion = ubicacion
        this.fecha_publicacion = fecha_publicacion
        this.editorial = editorial
        this.paginas = paginas
        this.dimensiones = dimensiones
        this.peso = peso
        this.disponible = disponible 
    }

    Descuento(){
        let descuuento: number = 0.2;
        let descuentoTotal: number = 0;
        if(this.precio >= 50){
            descuentoTotal = this.precio - (this.precio * descuuento)
            console.log(`Precio original ${this.precio}`)
            console.log(`Precio con descuento ${descuentoTotal}`)
        }
    }
}