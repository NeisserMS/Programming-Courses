### Estilos de Bootstrap

##### GRID:
- Para ocultar una columna y que salte al otro lado: ```learfix visible-xs-block```   // xs es grid, puede cambiarse.
- Para ocultar 2 unidades de las 12: ```col-sm-offset-2```
- Para compensar columnas: ```col-md-3 col-md-offset-3``` // Aquí hay 6 columnas en una sola linea.

##### TEXTO:
- Para que un texto destque: ```class="lead"```
- Para pintar un pedazo de un parrafo: You can use the mark tag to ```<mark>highlight</mark>``` text.
- Texto tachado al medio: ```<del>ejemplo</del>``` ó  ```<s>ejemplo</s>```
- Texto subrayado abajo: ```<ins> Ejemplo </ins>```
- Etiqueta small para que solo tenga un 85% del tamaño real: ```<small></small>```
- Letra en negrita: ```<strong> </strong>```
- Texto en cursiva: ```<em> </em>```
- Alinear los textos: ```text-left , text-center , text-right , text-justify , text-nowrap.```
- Transformar del texto: ```text-lowercase ó text-uppercase y text-capitalize.```
- Abreviatura, cuando pasas el mause te muestra el texto completo: ```<abbr title="attribute">attr</abbr>```
- Abreviatura para una cadena mas grande: ```<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>```
- Listas desordenadas: ```<ul><li></li></ul>``` // para eliminar los puntos en la lista agregamos la clase: class="list-unstyled"
- Listas ordenadas: ```<ol><li></li></ol>```
- Lista en linea: ```list-inline``` con display: ```inline-block```
- Para escribir fragmentos de codigo utilizamos la etiqueta Code: For example, ```<code>&lt;section&gt;</code>```
- Etiqueta para entrada del usuario como por ejemplo comandos: ```<kbd>```
- Para indicar la salida de bloques de un programa: ```<samp>```

##### TABLAS:
- Necesitas la clase table para que se acomode y se dibuje las lineas: ```<table class="table"> </table>```.
- Una tabla con bordes: ```<table class=" table table-bordered"></table>```.
- Tabla con rayas de cebra: ```<table class="table table-striped"></table>```.
- Tabla con efecto hover: ```<table class="table table-hover"><table>```.
- Clases para colorear filas de las tablas o celdas individuales: ```.active``` , ```.success``` , ```.info```, ```.warning``` y ```.danger```.
- Para ocultar utilizamos: ```.sr-only```.
- Responsive tabla  escribimos la clase: ```.table-responsive``` , pero dentro de ello debe estar la clase table.
  
##### FORMULARIOS:
- Las etiquetas ```<input>```, ```<textarea>```, ```<select>``` y ```<form-control>``` están configurados para un width 100%.
  Ahora para lograr un espacio optimo hay que envolverlo dentro de una clase ```form-froup```.
- Formulario en linea: ```<form class="form-inline"></form>```.
- Entras para el input: ```text```, ```password```, ```datetime```, ```datetime-local```, ```date```, ```month```, ```time```, ```week```, ```number```, ```email```, ```url```, ```search```, ```tel``` y ```color```.
- Área de Texto: ```<textarea class="form-control" rows="3"></textarea>```
- Las casillas de verificación son para seleccionar una o muchas y las radios son para selecionar una de muchas: .checkbox y ```<input type="checkbox">``` ,y .radio ```<input type="radio">```, y para desabilitarlo en la clase agregar ```disabled```.
- Casillas en linea solo agregando la clase: ```checkbox-inline``` ó ```radio-inline```.
- Dropdown: ```<select class="form-control"><option>1</option></select>```.
- Para deshabilitar un input: ```<input class="form-control" type="text" disabled>```.
- Si tenemos un formulario mas grande y queremos deshabilitarlo usamos una etiqueta padre antes del form
  llamado ```<fieldset disabled> </fieldset>```.
- Para input de solo lectura utilizar: ```<input class="form-control" readonly>```.
- Agregar un estado de validación a la clase: ```<div class="form-group has-success"></div>``` ó ```has-warning``` y ```has-error```.
- Podemos agregar un icono a la derecha con un color de validacion dentro de input (revisar la documentación).
- Podemos hacer dropdown y input mas pequeños con ```.input-lg``` ó ```.col-lg-*``` (revisar documentación).
  Ejemplos: ```<div class="form-group form-group-lg">``` ó ```<div class="form-group form-group-sm">```.
- Para seleccionar el ancho del input utilizado grid: Ejemplo: ```<div class="col-xs-2"><input type="text"></div>```.
  
##### BOTONES:
- Podemos utilizar las clases de botones en un elemento: ```<a>```, ```<button>``` ó ```<input>```.
- Clases de botones: ```btn btn-default```, ```btn btn-primary```, ```btn btn-success```, ```btn btn-info```, ```btn btn-warning```, ```btn btn-danger```, ```btn btn-link```.
- Podes hacer que los botones sean mas grandes (ancho o alto) con la grid. Ejemplo: ```class="btn btn-primary btn-lg"``` ó ```class="btn  btn-primary btn-xs"```.
- Boton a nivel de bloque, es decir aquel que abarca todo el ancho del padre, solo agregar a la clase: .```btn-block```.
- Apariencia presionada y colores mas oscuros agregando el estado active: ```<button type="button" class="btn btn-primary btn-lg active"></button>```.

##### IMAGENES:
- Para que sea responsive agregar la clase: ```.img-responsive```. Esto aplica un ```max-width: 100%, height: auto;``` y ```display: block;```
- Para que se centrar una imagen que usa .img-responsive escribir ```.center-block```
- Formas de imagen agregando la clase: ```img-rounded``` , ```img-circle``` y ```img-thumbnail.```

##### CLASES DE AYUDA:
- Podemos utilizar los colores de bootstrap como background: ```<p class="bg-primary">...</p>```
- Podemos utilizar el icono "X" de cierre generico para modales o alertas: 
  ```<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>```.
- Signo de intercalación para dropdown: ```<span class="caret"></span>```
- Para hacer visible elementos podemos usar: ```.hidden-xs``` , ```.visible-lg-*```.

## BOOTSTRAP 5:

##### FONDO:
- Se puede poner los como background los colores de boostrap
- Se puede poner los como background los colores gradientes de boostrap
- Para agregar opacidad agregar el style: ```style="--bs-bg-opacity"```.
  
##### BORDES:
- Se puede poner borders a los botones, imagenes o otros con: ```border```, ```border-top```, ```border-end```, ```border-bottom``` y ```border-start```.
- Se puede quitar bordes: ```border-0```, ```border-top-0```, ```border-end-0```, ```border-bottom-0```, ```border-start-0```.
- Cambiar el color del borde, ejemplo: ```border border-primary```.
- Para la opacidad: ```<div class="border border-success p-2" style="--bs-border-opacity: .5;">This is 50% opacity success border</div>```.
- Ancho del borde: ```<span class="border border-1"></span>``` hasta el numero 5.
- redondear las esquinas: ```rounded```, ```rounded-top```, ```rounded-end```, ```rounded-bottom```, ```rounded-start```, ```rounded-circle``` y ```rounded-pill```.
- Modificar las tallas de las esquinas: ```rounded-0```, hasta el numero 5.

##### COLORES:
- Podes utilizar los colores para los textos y a su vez darle un numero para indicar el tono: ```<p class="text-black-50"></p>```.

##### DISPLAY:
- podemos hacer que el entorno se adapte al texto y aplicarle un padding para que parezca un boton:
  ```<div class="d-inline p-2 bg-primary text-white">d-inline</div>```.
- Para ocultar elementos usamos: ```d-none```, y también podemos combinarlo con GRID y hacer que ciertas partes no se vean.
- Podemos combinar las clases de impresión con las de visualización (revisar documentación).

##### FLEX:
- Hacer que el entorno se adapte: ```<div class="d-inline-flex p-2">I'm an inline flexbox container!</div>```.
- Utilizar d-flex flex-row para una direccion horizontal: ```<div class="d-flex flex-row mb-3"></div>``` y
  todos los elementos dentro se alinean hacia la izquierda.
- Utilizar ```<div class="d-flex flex-row-reverse"></div>``` y todo se alinea hacia la derecha.
- Para una direccion vertical utilizar: ```<div class="d-flex flex-column mb-3"></div>```.
- Vertical pero al revés: ```<div class="d-flex flex-column-reverse"></div>```.
- Utilizar ```justify-content``` para alinear horizontalmente los elementos dentro: ```d-flex justify-content-start```, ```end```, ```center```, ```between```, ```aorund```,  ```evenly```. También podemos combinarlo con la GRID.
- Alinear verticalmente: ```class="d-flex align-items-start"```, ```end```, ```center```, ```baseline``` y ```stretch```.
- Utilizar ```align-self``` para cambiar invidualmente la posición de un elemento: ```class="align-self-start"```, ```end```, ```center```, ```baseline``` y ```stretch```.
- Utilizar ```.flex-fill``` para obligarlos a tener el ancho igual, aún si un elemento es muy grande.
  ```<div class="d-flex"><div class="p-2 flex-fill">Flex item with a lot of content</div>```.
- Utilizar ```flex-grow``` alterar la capacidad de crecimiento de un elemento flexible para llenar el espacio disponible. ```<div class="d-flex"><div class="p-2 flex-grow-1">```Flex item ```<div class="p-2">```Flex item```</div> <div class="p-2">```Third flex item```</div></div>```.
- Utilizar ```flex-shrink``` para hacer que el elemento se encoja a un tamaño necesisario si el otro esta ocupando el 100% de ancho: ```<div class="d-flex"><div class="p-2 w-100">```Flex item```</div><div class="p-2 flex-shrink-1">Flex item</div></div>```.
- Desplazar elementos hacia la derecha: ```<div class="me-auto">```.
- Desplazar elementos hacia la izquierda: ```<div class="ms-auto">```.
- Suponiendo que tenemos 3 elementos flexibles, podemos mover un elemento verticalmente arriba o abajo    mezclando: ```align-items```, ```flex-direction: column y margin-top: auto o margin-bottom: auto```.
  
##### INTERACCIONES:
- Selección de parrafos: con ```<div class="user-select-all">``` el usuaio podrá seleccionar todo el parrafo, con ```<div class="user-select-auto">``` es lo normal y con ```<div class="user-select-none">``` el usuario no podrá seleccionarlo.
- Para los ancors: agregandole la clase ```<div class="pe-none">``` no podrá dar click al enlace y ```<div class="pe-auto">``` es lo normal.

##### OPACIDAD:
- Con la clase ```<div class="opacity-100">``` la opacidad es 0%, podemos jugar con 75, 50 y 25.

##### OVERFLOW:
-  Útil para manejar el desbordamiento del contenido, con ```<div class="overflow-auto">``` se crea el scroll, ```overflow-hidden``` solo muestra hasta donde esté sin desbordar, pero no muestra todo,  ```overflow-visible``` si muestra todo el contenido aún si este se desbordar y ```overflow-scroll``` crea el scroll para ambos sentidos.

##### POSITION:
- Entre estás tenemos: ```static```, ```relative```, ```absolute```, ```fixed``` y ```sticky```.
- Organizarlos con: ```top```, ```start```, ```bottom``` y ```end```.
- ´Para centrarlos podemos utilizar la clase: ```<div class="translate-middle">```. Esta clase aplica las transformaciones translateX(-50%)y translateY(-50%). Ejemplo: ```<div class="position-absolute top-100 start-100 translate-middle"></div>``` y podemos jugar con el valor de top: 0, 50 y 100. De igual aplicar los mismos valores al start. Nos sirve mas para aplicarlos de manera absoluta.

##### OSCURIDAD:
- Podemos agregar y eliminar sombras más rapido. Para eliminar utilizamos la clase ```<div class="shadow-none">```. Para darle un efecto de sobresalido los bordes utilizamos: ```shadow-sm```. Para darle un sombreado a los bordes de abajo y costados: ```shadow```, y por último para darle el efecto de sombras a los cuatro lados: ```shadow-lg```. 

##### DIMENSIONAMIENTO:
- Podemos hacer que solo ocupe una cierta parte del ancho con la clase: ```<div class="w-25 p-3">``` y asi darle los valores de 50, 75, 100 y auto.
- Igualmente podemos hacer lo mismo para las alturas: ```<div class="h-25">```.
- Para darle un max-width usamos la clase: ```mw-100```.
- Para darle un max-height usamos la clase: ```mh-100```.

##### ESPACIADO: 

- margin : m-
- padding: p-
  

#### FUENTES:  
- https://getbootstrap.com/docs/3.4/css/
- https://getbootstrap.com/docs/5.2/utilities/flex/






