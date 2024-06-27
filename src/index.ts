import { Libro } from "./models/libro";
import { Libreria } from "./models/libreria";
import PromptSync from "prompt-sync";

const promptSync = PromptSync();

const miLibreria = new Libreria('accion','libros de accion');

function AgregarLibro(): void {
  const titulo = promptSync("Ingrese el título del libro: ");
  const autor = promptSync("Ingrese el autor del libro: ");
  const genero = promptSync("Ingrese el género del libro: ");
  const idioma = promptSync("Ingrese el idioma del libro: ");
  const precio = parseFloat(promptSync("Ingrese el precio del libro: "));
  const formato = promptSync("Ingrese el formato del libro: ");
  const isbn = promptSync("Ingrese el ISBN del libro: ");
  const descripcion = promptSync("Ingrese la descripción del libro: ");
  const estado = promptSync("Ingrese el estado del libro: ");
  const ubicacion = promptSync("Ingrese la ubicación del libro: ");
  const fecha_publicacion = parseInt(promptSync("Ingrese la fecha de publicación del libro (año): "));
  const editorial = promptSync("Ingrese la editorial del libro: ");
  const paginas = parseInt(promptSync("Ingrese el número de páginas del libro: "));
  const dimensiones = promptSync("Ingrese las dimensiones del libro: ");
  const peso = promptSync("Ingrese el peso del libro (kg): ");
  const disponible = promptSync("¿El libro está disponible? (sí/no): ");
  
  const nuevoLibro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso, disponible);
  miLibreria.AgregarLibro(nuevoLibro);
  console.log(`El libro "${titulo}" ha sido agregado a la librería.`);
}



function Menu(): number {
  let menu: string
  menu = 'Menu libreria\n\n'
  menu += '1: agregar nuevo libro\n'
  menu += '2: Eliminar libro\n'
  menu += '3: Mostrar pila de libros\n'
  let codigo: number = parseInt(promptSync(menu))

  return codigo
}

function EjecutarMenu() {
  let codigoMenu: number = Menu()
  switch (codigoMenu) {
  case 1:
      AgregarLibro()
      EjecutarMenu2()
      break;
  case 2:
      EliminarLibros()
      EjecutarMenu2()
      break;
  case 3:
      VerLibros()
      EjecutarMenu2()
      break;
    default: 
      false;
      break;
  }
}

function Menu2() {
    let menu: string = 'Desea continuar en el menu\n\n';
    menu += '1: si\n';
    menu += '2: no\n\n';
    menu += 'Elija una opcion: ';
    let codigo: number = parseInt(promptSync(menu));

    return codigo;
}

function EjecutarMenu2() {
  let continuar: boolean = true;

  while (continuar) {
      let codigoMenu: number = Menu2();
      switch (codigoMenu) {
          case 1:
              EjecutarMenu();
              break;
          case 2:
              alert('Salió del menú');
              continuar = false;
              break;
          default:
              alert('Opción no válida. Intente de nuevo.');
              break;
      }
  }
}


