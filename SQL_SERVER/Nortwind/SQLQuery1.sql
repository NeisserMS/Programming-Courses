USE Northwind
-- Hacer un backup de una base de datos o copia de seguridad.
BACKUP DATABASE Northwind
TO DISK = 'D:\Github\Programming-Courses\SQL_SERVER\Nortwind\Northwind.bak'
WITH FORMAT
, STATS = 10
GO

-- Restauraci�n de la base de datos.
RESTORE DATABASE Northwind
FROM DISK = 'D:\Github\Programming-Courses\SQL_SERVER\Nortwind\Northwind.bak'
WITH REPLACE
,STATS = 10
GO

-- EJERCICIOS
/* Crear una consulta que permita mostrar el c�digo del cliente, Nombre de la
compa�ia, el cargo, la direcci�n, la ciudad donde radica, el c�digo postal,
el n�mero tel�fonico y su n�mero de fax.*/

SELECT CustomerID AS C�digo,
	CompanyName AS Compa�ia,
	ContactTitle AS Cargo,
	Address AS Direcci�n,
	City AS Ciudad,
	PostalCode AS Cod_Postal,
	Phone AS Nro_Celular,
	Fax AS Nro_Fax
FROM dbo.Customers

-- FORMA ANTIGUA DONDE SE REALIZA UNA UNI�N IMPLICITA DE 2 TABLAS (Producto Cartesiano).
/* Crear una consulta que permita mostrar el c�digo del producto, nombre 
del producto, la categoria, la descripci�n, el precio, stock y la inversi�n.
Ordenar los registros por categoria y por inversi�n de forma ascendente. */
SELECT Products.ProductID,
	Products.ProductName AS Producto,
	Categories.CategoryName AS Categoria,
	Products.QuantityPerUnit AS Descripci�n,
	Products.UnitPrice AS Precio,
	Products.UnitsInStock AS Stock,
	(Products.UnitPrice*Products.UnitsInStock) AS Inversion
FROM Products, Categories
WHERE Products.CategoryID = Categories.CategoryID
ORDER BY Categoria, Inversion ASC
GO

-- FORMA ACTUAL USANDO INNER JOIN
SELECT Products.ProductID,
	   Products.ProductName AS Producto,
       Categories.CategoryName AS Categoria,
       Products.QuantityPerUnit AS Descripci�n,
       Products.UnitPrice AS Precio,
       Products.UnitsInStock AS Stock,
	   (Products.UnitPrice * Products.UnitsInStock) AS Inversion
FROM Products
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID
ORDER BY Categoria, Inversion ASC;

/* Crear una consulta que permita mostrar el codigo del empleado, apellidos,
nombres, cargo, fecha de nacimiento, edad, fecha de contrato, la direccion, la ciudad,
Pa�s y su numero de celular. Ordenar los registros por cargo y empleado. */
SELECT EmployeeID AS C�digo,
	LastName+','+FirstName AS Empleado,
	Title AS Cargo,
	CONVERT (date, BirthDate) AS [Fecha de Nacimiento],
	FLOOR(DATEDIFF(DD, BirthDate, GETDATE())/365.25)Edad,
	CONVERT(DATE,HireDate) AS [Fecha de Contrato],
	Address AS Direccion,
	City AS Ciudad,
	Country AS Pais,
	HomePhone AS Celular
FROM dbo.Employees
ORDER BY Cargo, Empleado

/* Crear una consulta que permita mostrar el n�mero de orden, el nombre del
contacto, apellidos, nombres del empleado, fecha de orden, fecha de compra,
fecha requerida, ciudad, Pais. Ordenar los registros por Pais, ciudad,
empleado y fecha requerida. */

SELECT OrderID AS nro_orden,
	Customers.ContactName AS nombre_contacto,
	Employees.LastName+ ','+Employees.FirstName AS Empleado,
	CONVERT (date, Orders.OrderDate) AS Fecha_Orden,
	CONVERT (date, Orders.ShippedDate) AS Fecha_Compra,
	CONVERT (date, Orders.RequiredDate) AS Fecha_Requerida,
	Orders.ShipCity AS Ciudad,
	Orders.ShipCountry AS Pais
	FROM Orders INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
	INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
	ORDER BY Pais, Ciudad, Empleado, Fecha_Requerida
 
 /* Consulta que permita mostrar todos aquellos empleados que vivan
	en la ciudad de Londres */

	SELECT * FROM Employees
	where City like 'London'
	
/*  
Crear una consulta que permita mostrar cuantos Productos existen por categoria,
Sotck Total. Asi como tambien se desea saber el total de productos que
existen por categorias y el Stock total de unidades.
*/

SELECT (CASE WHEN C.CategoryName IS NULL THEN 'TOTAL'
ELSE C.CategoryID END) AS GategoryName,
COUNT (P.CategoryID) as nro_productos,
SUM (P.UnitsInStock) AS Stock_Total
FROM Products P, Categories C
WHERE C.CategoryID = P.CategoryID
GROUP BY C.CategoryName
WITH ROLLUP
ORDER BY CategoryName