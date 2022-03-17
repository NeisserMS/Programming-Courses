Para que tranformar o procesar TS a JS: 
> tsc salida.ts
Para evitar estar compilando a cada rato escribimos:
> stc -w

Con el archivo *tsconfig* podemos indicar que archivos compilar y cuales excluir.
, con esto lo inicializamos.
> tsc --init 
El archivo contiene las reglas necesarias para indicarle al compilador las diferentes opciones que se deben realizar.

Para hacer que todo nuestro archivo este en una carpeta llamada build: Para ello descomentamos "outDir" del tsconfig.json y lo que hace es redireccionar los archivos JS a la raiz del proyecto.

> tiene que quedar asi: "outDir": "./build"

¿Qué son los decodadores?

Un decorador en TypeScript es una funcion que agrega metadato o 
funcionalidad extra a una clase propiedad o metodo.


