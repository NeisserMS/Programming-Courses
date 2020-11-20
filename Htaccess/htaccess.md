## HTACCESS

Es un archivo de configuración para servidores basados en apache. 
Este tipo de archivos configura ajustes para hacer que el servidor se comporte de una determinada forma.

Tiene muchos usos, se utiliza para:

- Proteger su sitio web con una contraseña
- Crear una pagina de error personalizada
- Redireccionar a otra página

Es una herramienta muy potente para evitar que puedan dañar nuestro sitio web
por accidente.

##### RESTRINGIENDO ACCESO A LOS ARCHIVOS DE CARPETAS

Si escribimos en el link: css/ veremos nuestros archivos.

Escribimos para restringir el acceso:

> Options All -indexes

y con esto veremos que ya no podemos ingresar

##### PERSONALIZAR PÁGINAS DE ERRORES

Código de páginas de errores:

- 400 (solicitud incorrecta)
- 401 (autorizaación requerida)
- 402 (pago requerido)
- 403 (prohibido)
- 404 (no encontrado)
- 405 (método no permitido)
- 406 (no aceptable)
- 407 (autenticación de proxy requerida)
- 408 (superado el tiempo de espera de solicitud)

Hay muchos, pero solo usamos algunos.

Código para el archivo htaccess:

> ErrorDocument 500/internalerror.html

> ErrorDocument 401/authrequired.html

> ErrorDocument 403/forbidden.html

> ErrorDocument 404/notfound.html

Escribimos el nombre del proyecto que esta en htdocs:

> ErrorDocument 404 /Tienda-Regalos/404.html

Tienes que crear tu archivo de 404.html aparte, o de cual quieres.

##### APLICANDO LA CONFIGURACIÓN GLOBAL AL SERVIDOR

Ya hemos configurado para que no vean nuestras carpetas, pero cuando escribimos en otra vemos que si se puede visualizar, entonces debemos de restringirlo. El servidor no tiene la configuración global, debemos de proteger todo el servidor.

Entonces creamos un archivo htaccess en la carpeta raiz, es decir en htdocs.

##### PROTEGIENDO PROYECTOS CON USUARIO Y CLAVE EN SERVIDOR LOCAL


##### URL AMIGABLES

Ver el curso aquí: https://www.youtube.com/watch?v=y9KEgh6yXME
