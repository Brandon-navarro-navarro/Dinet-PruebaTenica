# Dinet Prueba Tecnica

## Consideraciones
1. El proyecto back esta desarrollado en Visual Studio 2022.
2. El proyecto front esta desarrollado en Visual Code por lo cual no sera visible al abrir la solucion de Visual Studio, se debe abrir en visual code y seguir las instrucciones indicadas lineas abajo.


## Estructura
## Back

En la carpeta Dinet.Api se encuentra el proyecto Api que se realizo en .net 8 el cual usa el ORM Entity Framwork para la conexion a la base de datos SqlServer Microsoft.
El Query de creacion de la BD se encuentra en la carpeta principal con el nombre BdScript;

Inicialmente ejecutar el Archivo BdScript.sql para crear la base de datos y la tabla productos

Luego ya puede ejecutar el proyecto Api.


## Front

En la carpeta DinetFront, se encuentra el front desarrollado en Angular 19 pero con modulos.

Se deben instalar los modulos de NodeJs con el comando

```bash
npm i
```

Para iniciar el servidor se necesita ejecutar el comando:

```bash
npm start
```
