import { Libro } from "./libro";

export class Libreria {
    nombre: string
    descripcion: string
    book: Libro [] = []
    constructor  (
        nombre:string,
        descripcion:string,
    ){
        this.nombre = nombre
        this.descripcion = descripcion
    }

    AgregarLibro(nuevoLibro:Libro): void{
        this.book.push(nuevoLibro)
    }

    EliminarLibros(): any {
        this.book.pop()
    }
    
    VerLibros() {
        const libroPorDefecto = new Libro()
        console.log('pila actual de libros');
        console.log(this.book,libroPorDefecto);
    }

}

