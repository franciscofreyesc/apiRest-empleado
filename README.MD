## Instalación

Se debe renombrar el archivo `.env_._example` a `.env`
con los datos correspondientes a la base de datos a utilizar.

## Cargar la base de datos

- Para construir la base de datos, 
utilizar el script [`baseDeDatos.sql`]

- Para crear los procedimientos de almacenado,
utilizar el script [`sp.sql`]

## Instalación de dependencias
Desde la terminal, usar el siguiente comando:

```
npm install express mysql dotenv
```

## Instalación de dependencias
Para iniciar la app, ejecutar el siguiente comando en la terminal:

```
npm start
```
### Tecnologías usadas

La aplicación se realizó en `nodeJs` y se utilizó como motor de base de datos `mysql`.

## Producción

A través de Postman se puede consultar la api, desplegada en Heroku con conexión a MySql por medio de Google Cloud, en las siguientes URL:

```
`GET` https://apirest-empleado.herokuapp.com/empleados
```

```
`GET` https://apirest-empleado.herokuapp.com/empleados/NUMERO_DE_ID_A_CONSULTAR
Ejemplo : https://apirest-empleado.herokuapp.com/empleados/1
```

```
`POST` https://apirest-empleado.herokuapp.com/agregaEmpleado

    ```
    {
        "nombre" : "NOMBRE EMPLEADO",
        "salario" : numero correspondiente a su salario
    }
    ```

```

```
`DELETE` https://apirest-empleado.herokuapp.com/eliminarEmpleado/NUMERO_DE_ID_A_ELIMINAR
```

```
`PUT` https://apirest-empleado.herokuapp.com/actualizarEmpleado/NUMERO_DE_ID_A_ACTUALIZAR
```