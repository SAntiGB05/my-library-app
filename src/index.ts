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



AgregarLibro();

