export class Libro {
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: number;
    formato: string;
    isbn: string;
    descripcion: string;
    estado: string;
    ubicacion: string;
    fecha_publicacion: number;
    editorial: string;
    paginas: number;
    dimensiones: string;
    peso: string;
    disponible: string;

    constructor(
        titulo: string = 'Cien años de soledad',
        autor: string = 'Gabriel García Márquez',
        genero: string = 'Ficción',
        idioma: string = 'Español',
        precio: number = 18.99,
        formato: string = 'Tapa blanda',
        isbn: string = '978-0307474728',
        descripcion: string = 'La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.',
        estado: string = 'nuevo',
        ubicacion: string = 'Bogotá, Colombia',
        fecha_publicacion: number = 1967,
        editorial: string = 'Editorial Sudamericana',
        paginas: number = 417,
        dimensiones: string = '13 x 2.8 x 19.8 cm',
        peso: string = '340 gramos',
        disponible: string = 'si'
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.disponible = disponible;
    }

    AplicarDescuento(): void {
        const descuento = 0.2; 
        const precioFinal = this.precio * (1 - descuento);

        console.table({
            titulo: this.titulo,
            autor: this.autor,
            editorial: this.editorial,
            precio: this.precio,
            descuento: descuento * 100 + '%',
            precio_final: precioFinal
        });
    }
}
