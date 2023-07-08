/* www.youtube.com/watch?v=8HLhKbWqCxo&list=PLFNWPvtjBMju_UZdG3PLige5PBNAEQDmR&index=11 */
/* Crear base de datos */
create database Test

/* Usar base de datos */
use Test

/* Crear tabla usuario */
create table usuario (
	id_user int identity primary key,
	nombre varchar(20),
	password varchar (20)
)

/* Insertar registros en la base de datos */
insert into usuario values('Neisser', 'YUMYlove26');
insert into usuario values('Jair', 'test123');

/* ---------------------------------------------------------- */
/* El comando GO sirve para ejecutar multiple SP en un Script */
/* De la manera normal ejecutariamos por partes, pero con GO podemos hacerlo todo de una vez. */

create database Inventario
GO
use Inventario
GO
create table usuario_Inventario (
	id_user int identity primary key,
	nombre varchar(20),
	password varchar (20)
)
GO
insert into usuario_Inventario values('Neisser', 'YUMYlove26');
insert into usuario_Inventario values('Jair', 'test123');

/* ---------------------------------------------------------- */
/* ¿QUÉ ES IDENTITY?, Es una propiedad  para crear una columna auto numerica y no permite valores repetidos*/

create database Producto
GO
use Producto
GO
/* Aquí se le dirá que comience desde el 11 y que incremente de 2 en 2 */
create table producto_usuario (
	id_user int identity (11, 2) primary key,
	nombre varchar(20),
	grupo varchar (20),
	precio varchar (5) not null,
)
GO
insert into producto_usuario values('leche', 'embutidos', 10);
insert into producto_usuario values('yogurt', 'embutidos', 15);
insert into producto_usuario values('yogurt 2', 'embutidos', 18);

Select * from producto_usuario

/* ---------------------------------------------------------- */
/* Desactivar el identity para aplicar valores repetidos */
create database ProductoX
GO
use ProductoX
GO
/* Quitamos el primary key (esto impide ingresar los valores repetidos) */
create table producto_usuarioX (
	id_user int identity,
	nombre varchar(20),
	grupo varchar (20),
	precio varchar (5) not null,
)
GO
/* Para activar la insercción manual*/
SET IDENTITY_INSERT producto_usuarioX ON
GO
insert into producto_usuarioX (id_user,nombre,grupo,precio) values(11, 'leche', 'embutidos', 10);
insert into producto_usuarioX (id_user,nombre,grupo,precio) values(11, 'yogurt', 'embutidos', 15);

Select * from producto_usuarioX

/* --------------------------- */
use Producto
select * from producto_usuario

/* Eliminar */
delete from producto_usuario where id_user=15

/* Cuando eliminamos todos los datos y volvemos a insertar
los ids comienzan desde el número en el que se quedó, es decir, no comienza de 0.
Utilizaremos el comando TRUNCATE para que elimine la tabla y se pueda comenzar desde el inicio*/
truncate table producto_usuario

/* Update */
update producto_usuario set nombre='Durazno' where id_user=15

/* --------------------------- */
/* Relaciones entre tablas */
CREATE DATABASE Ventas
ON PRIMARY
(NAME = 'Ventas',
FILENAME = 'C:\VentasData.mdf',
SIZE = 10,
MAXSIZE = 50,
FILEGROWTH = 5)

/*ALTER DATABASE Ventas
MODIFY FILE (NAME = 'Ventas', MAXSIZE = 100MB, FILEGROWTH = 10MB); */

LOG ON
(NAME = 'VentasLog',
FILENAME = 'C:\VentasLog.ldf',
SIZE = 5,
MAXSIZE = 25,
FILEGROWTH = 5);

GO
use Ventas
create table Productos
(
cod varchar(4) primary key not null,
nombre_prod varchar(50) not null,
)
GO
create table Facturar
(
fecha date not null,
nFactura int primary key not null,
doc_identidad int not null,
nom_cliente varchar(50) not null
)
GO
create table Detalle
(
cod varchar(4) not null,
nFactura int not null,
cantidad int not null,
precio money not null,
importe money not null,
CONSTRAINT FK_Detalle_Productos /* Nombre de restricción, sino se le pone se da uno por defecto */
FOREIGN KEY (cod) REFERENCES Productos(cod)
	ON UPDATE CASCADE /* Se le asigna ciertas reglas */
	ON DELETE CASCADE,
CONSTRAINT FK_Detalle_Facturar
FOREIGN KEY (nFactura) REFERENCES Facturar(nFactura)
	ON UPDATE CASCADE
	ON DELETE CASCADE
)

/*Si las tablas estan creadas y queremos relacionar por comandos entonces
solo basta con hacer lo mismo pero usando el ALTER TABLE:
User Ventas
ALTER TABLE Detalle
ADD CONSTRAINT FK_Detalle_Productos... */


