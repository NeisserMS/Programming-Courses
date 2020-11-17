### GIT

Es un sistema de control de versiones.
Es primordial que lo sepan todos los programadores, porque todos los software se estan complicando cada vez mas y necesitamos mejores herramientas para controlar cuando un software se vuelve mas complejo con el paso del tiempo.

Un sistema de control de versiones es un programa que controla o administra las distintas versiones de un programa. 
Se usa porque el proyecto cambia, crece a medida del tiempo porque se hacen cambios, osea se modifica, va evolucionando y para controlarlo se utiliza el sistema de control de versiones, hay muchos pero git es el mas utilizado.

Es open source es creado por el mismo creador del kernel de linux, lo creo especificamente para controlar los cambios que hacia en el codigo del kernel del linux, y a medida que el modificaba necesitaba un programa que le ayude a administrarlo. Además también se puede contribuir con multiples desarrolladores, individualmente nos ayuda a trabajar de manera más profesional. Nos ayuda a poder manejar los cambios, nos da un registro de todos los cambios, podremos navegar entre cualquier punto del la version del programa, podemos ir viendo que dia, quien lo modifico, a que hora, todo esto se ve, también podemos revertir el codigo, podemos trabajar con repositorios locales y remotos.

Vamos a encontrar:

- Comandos
- Configuraciones
- Se puede hacer una gran cantidad de operaciones

Nos provee una manera de poder seguir los cambios del codigo, lo hace a través de unos snapshots, es decir nos ayuda como
tomarle uan foto al codigo y seguimos avanzando, y luego podemos retroceder y ver ese snapchots y  podemos alterarlo o modificarlo, lo que queramos. También para tomar desiciones de para cuando ahcer lso cambios. podemos ahcer guardados en cuaqluier punto de la app

Ejemplo: En nuestro proyecto podemos guardar la version uno y guardamos, luego asi sucesivamente y poder retroceder y verlos.

comandos básicos, esta herramienta interactura directamente con el sistema operativo, asi q lo manejaremos a traves de la consola, este tiene una terminal pero con mejores funcionalidades ya que trae todos los conceptos de UNIX, de linux o mac, ambos decienden de Unix.

Origin master es la rama principal del proyecto.

git: repositorio local

github: repositorio remoto

##### COMANDOS

> cd Desktop // ingresamos al escritorio de nuestro equipo

Configuremos el nombre y el correo del usuario:

> $ git config --global user.email "rko_619_fbi@hotmail.com"
> $ git config --global user.name "Neisser Sánchez"

Comando para verificar si los datos fueron guardados:

> $ git config --global -e // esto nos abrirá el VSC y aparecerá los datos.

Otro comando para verificar si los datos fueron guardados:

> $ git config --global -l

Comando para ver la configuración del GIT:

> $ git config --list

Nota: Si te equivocaste de nombre entonces ejecuta el mismo comando.

##### Estados

- 1.- Modificado (Working Directory) //Es la area de directorio de trabajo
- 2.- Preparado (Staging Area) //Area de preparación
- 3.- Confirmado (.git directory)
 
En el Working Directory es en donde trabajamos normalmente, imaginemos que tenemos una pc y construyendo un proyecto, una vez tenemos un progreso y guardamos los cambios, esos archivos estan como modificados, entonces eso lo enviamos al staging Area esas modificaciones, para que lo cambios que generamos git tome el control de ellos y los vaya conteniendo en su directorio. El siguiente paso es cuando ya estamos seguros de las modificaciones, entonces pasamos al estado de confirmado, entonces hacemos un commit y esos archivos lo subimos al github.

##### CREACIÓN DE UN REPOSITORIO

Comandos unix:

> $ mkdir primerRepositorio  // para crear una carpeta
> $ cd primerRepositorio // para movernos e ir dentro de la carpeta
> $ touch inicio.php  // Creamos unos archivos en la carpeta
> Para limpiar pantalla escribimos: ctrl + l

Comandos para git:

Dar inicio al proyecto que acabamos de hacer, ya con esto le decimos que tenemos un proyecto local y que estamos en la rama master (principal).

> $ git init 

Para verificar el estado de los archivos

> $ git status

Permitir ingresar un archivo a la vez

> $ git add 

Para ingresar todos los archivos

> $ git add . // NT: Ya está en la zona de estage los archivos.

Para empaquetarlo y decir que ya está listo una versión

> $ git commit -m "primerCommit"

 Para verificar y ver cual es la modificacion exacta que se dio escribimos

 > $ git diff

Eliminar un archivo de Stage

> $ git reset HEAD form.php

Deshaciendo los cambios

> $ git checkout .
NT: Con este comando volvemos a la versión anterior, al estado anterior antes de hacer una modificación.

Para ver el historial de cambios

> $ git log

- Regresando a una vesión especifica del Commit

Entonces después de escribir git log, vemos que tenemos dos versiones, lo importante de esto es sacar el hash, la identificacion del commit, es lo que lo identifica, es un conjunto de numeros y letras, y cada commit tiene su propia identificacion.

> $ git checkout 2243b6b7dc238acb8c0c7ab83a164fc8a502fcd9

NT: Con esto hemos regresado al primer commit anterior.

##### GitHub

- Creación del repositorio en GitHub

> Ya esto se hace desde la plataforma xdxd

- De repositorio Local a remoto

Ahora para sincronizar git y github escribimos

> $ git remote add origin https://github.com/NeisserMS/sincronizando.git

- Para sincronizar los cambios que se hacen en el repositorio local

> $ git push -u origin master

- Creando una rama (Branch)

> $ git branch ejemplo

- Para ver en que branch estamos trabajando escribimos

> $ git branch

- Si nosotros queremos trabajar en otra rama

> $ git checkout ejemplo

- Fusionando una rama

> $ git merge ejemplo

NT: Esto es posible cuando hay dos ramas!

- Eliminar una Rama

> $ git branch -d ejemplo

- PULL

> $ git pull origin master

Cuando un colaborador hace una modificacion desde la plataforma github y queremos traer esa informacion a nuestro editor.

- PULL REQUEST (Funcionalidad de GitHub)

Es una forma en que una colaboradora de un proyecto pueda enviar los cambios y mejoras al mismo, sin necesidad de que este colabroador sea parte de ese proyecto como miembro. 

Esto es bien sencillo, cuando tu tienes un proyecto y quieres participar en otro o otra persona en la tuya, entonces agrega codigo a tu proyecto y te deja un mensaje, ya tu cuando entres a tu repositorio podrás ver que tienes una colraboración (pull request) y ves lo que ha agregado esa persona, si quieres lo apruebas de lo contrario no.

- GIT IGNORE

Esto es para que los archivos en nuestro proyecto git no tome el control porque no son importantes.

Entonces solo creamos un archivo con la extensión .gitignore y dentro de él escribimos los nombres de los archivos que quermos ignorar.

Entonces al incluir el archivo comentario dentro de gitignore, al escribir git status vemos que git quiere tomar el control de gitignore, pero el archivo comentario ya no está, git ya a ignorado ese archivo. Lo mismo podemos hacer para una carpeta.

- GIT KRAKEN

Esto es un IDE muy potente con interfaz mas amigable, para interactuar con tu cuenta de git sin utilizar las lineas de comando, y tiene version gratuita y de pago.

##### Comandos







- Esto nos aparece cuando creamos un repositorio sin README en GitHub

echo "# Instagram" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/NeisserMS/Instagram.git
git push -u origin master

































