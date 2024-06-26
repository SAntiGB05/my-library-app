import { Libro } from "./libro";

export class libreria {
    nombre: string
    descripcion: string
    book: Libro []
    constructor  (
        nombre:string,
        descripcion:string,
        book: Libro []
    ){
        this.nombre = nombre
        this.descripcion = descripcion
        this.book = book  
    }

    AgregarLibro(){
        let newlibro: any = {
            titulo: prompt('titulo'), 
            autor : prompt('autor'),
            genero : prompt('genero'),
            idioma : prompt('idioma'),
            precio : prompt('precio'),
            formato : prompt('formato'),
            isbn : prompt('isbn'),
            descripcion : prompt('descripcion'), 
            estado : prompt('estado'),
            ubicacion : prompt('ubicacion'),
            fecha_publicacion : prompt('fecha'),
            editorial : prompt('editorial'),
            paginas : prompt('paginas'), 
            dimensiones : prompt('dimensiones'),
            peso : prompt('peso'),
            disponible : prompt('disponible')
        }
        this.book.push(newlibro)
        console.log('libro agregado');
        console.log(newlibro); 
    }

    EliminarLibros() {

        let libroEliminado = this.book.pop()
        console.log('libro eliminado:');
        console.log(libroEliminado);
    }
    
    VerLibros() {
        console.log('pila actual de libros');
        console.log(this.book);
    }

}

