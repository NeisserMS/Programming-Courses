CREATE DATABASE Test
USE Test
CREATE TABLE Clientes(
	id int identity primary key,
	nombre varchar(20),
	dni varchar (8),
	direccion varchar (30)
)

INSERT INTO Clientes values ('Neisser', '70369866', 'Psje tumi #111 el cortijo');
INSERT INTO Clientes values ('Jair', '70369865', 'Las tunas 123');
INSERT INTO Clientes values ('Karen', '70369864', 'Los rosales 123');
	
-- Creando el PS para MOSTRAR los datos
CREATE PROCEDURE ps_select_clientes
AS
SELECT id, nombre, dni, direccion
FROM Clientes
GO

-- Probando el PS
EXEC ps_select_clientes

-- Creando el PS para INSERTAR datos.
CREATE PROCEDURE ps_insertar_clientes
(
@nombre    varchar(20), -- Añadimos los parametros (tipo de datos y cantidad de caracteres debe ser igual)
@dni       varchar(8),
@direccion varchar(20)
)
AS
INSERT INTO Clientes (nombre, dni, direccion) --  Comando para insertar los datos
VALUES (@nombre, @dni, @direccion) -- pasamos los valores a insertar por campos.
SELECT @@IDENTITY AS id -- Indicamos que el id sea incrementable
RETURN -- con esto especificamos el código de retorno
GO -- para finalizar la query

EXEC ps_insertar_clientes 'Michael', '12345678', 'test1'

-- Creando el PS para ACTUALIZAR datos.
CREATE PROCEDURE ps_update_clientes
(
@nombre    VARCHAR(20),
@dni       VARCHAR(8),
@direccion VARCHAR(20),
@id		   INT
)
AS
UPDATE Clientes 
SET nombre=@nombre, dni=@dni, direccion=@direccion -- SET nos permite establecer los nuevos valores para las columnas indicadas.
WHERE id=@id
GO

EXEC ps_update_clientes 'Michael', '987654321', 'test2', 4;

-- Ceando el SP DELETE
CREATE PROCEDURE ps_delete_clientes
(
@id  INT
)
AS
DELETE FROM Clientes WHERE id=@id
GO

EXEC ps_delete_clientes 4;

-----------------------------------------------------------}}

CREATE PROC sp_select_client_Jair
AS
BEGIN -- Begin y end sirve para agrupar y demilitar bloque de codigos en un SP (ejecutar multiples instrucciones en un bloque).
SELECT * FROM Clientes WHERE nombre = 'Jair'
END

-- DROP PROCEDURE sp_select_client_Jair
EXEC sp_select_client_Jair

------------------------------------
