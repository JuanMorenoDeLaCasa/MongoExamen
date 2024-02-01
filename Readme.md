# Gestión de Reservas con Mongo y Express

Proyecto de examen con NodeJS, Mongo, Mongoose, Express, Express-session y dotenv.

Creación de contenedores:

```bash
docker-compose up -d
```

Arranque contenedores creados:

```bash
docker-compose start
```

En la carpeta `stack-mongo` me creo un archivo `.env` con las credenciales:

```
MONGO_USER=root
MONGO_PASSWORD=83uddjfp0cmMD
MONGO_PORT=27017
EXPRESS_USER=mongo
EXPRESS_PASSWORD=83uddjfp0cmMD
EXPRESS_PORT=8081
```

Patrón MVC (Modelo-Vista-Controlador).

Creo un archivo `.env` en la carpeta `backend`` con el formato:

```
MONGO_URL=mongodb://root:83uddjfp0cmMD@localhost:27017/Reservas?authSource=admin
SERVER_PORT=8000
```

Donde `MONGO_URL` es la URL de conexión a Mongo y `SERVER_PORT` es el puerto donde corre el servidor.

Creo el modelo de datos para el usuario `models/User.js`:

```javascript

```

Rutas de la aplicación:

RUTA | METODO | Observaciones
-----|--------|--------------
/auth | GET | Ventana bienvenida AUTH
/auth/register | GET | Mostrar formulario registro
/auth/register | POST | Guardar datos formulario registro
/auth/login | GET | Mostrar formulario login
/auth/login | POST | Enviar datos login y registrar sesion
/reservas   | GET | Mostrar tabla lista reservas
/reservas/list/{id} | GET | Mostrar la reserva con ID
/reservas/create | GET | Mostrar formulario para añadir una reserva 
/reservas/create | POST | Guardar info de la reserva nuevo
/reservas/edit/{id} | GET | Mostrar formulario para editar reserva con ID
/reservas/edit/{id} | POST | Guardar info de la reserva con ID
/reservas/delete/{id} | GET | Mostrar formulario desea borrar reserva con ID
/reservas/delete/{id} | POST | Borrar reserva con ID
/alojamientos   | GET | Mostrar tabla lista alojamientos
/alojamientos/list/{id} | GET | Mostrar el alojamiento con ID
/alojamientos/create | GET | Mostrar formulario para añadir un alojamiento
/alojamientos/create | POST | Guardar info del nuevo alojamiento
/alojamientos/edit/{id} | GET | Mostrar formulario para editar alojamiento con ID
/alojamientos/edit/{id} | POST | Guardar info del alojamiento con ID
/alojamientos/delete/{id} | GET | Mostrar formulario desea borrar el alojamiento con ID
/alojamientos/delete/{id} | POST | Borrar alojamiento con ID



