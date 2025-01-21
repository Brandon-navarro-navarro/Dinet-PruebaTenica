Create Database DinetBD
Go

Use DinetBD
Go

Create Table Productos
(
 Id			   int primary key identity,
 Nombre		   nvarchar(100),
 Precio		   decimal(18,2),
 FechaCreacion datetime
)
Go