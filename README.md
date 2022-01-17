## Levantar el proyecto

Clonar el proyecto en su máquina local, después posicionarse dentro de la carpeta mediante la terminal e instalar las dependencias con npm o yarn ( `npm install/ yarn install`), para correr las pruebas unitarias utilice `npm run test o yarn test` e npm/yarn start para levnatar el proyecto.

*Para visualizar el proyecto desplegado con netlifi accedera a [https://upbeat-edison-2dc2a8.netlify.app/](https://upbeat-edison-2dc2a8.netlify.app/)


El proyecto por defecto hace uso de una Api fake implementada con [My JSON Server](https://my-json-server.typicode.com/Maugg/mockJson) pero puede optar por la librería JSON Server.

### `Trabajar junto con JSON Server`

1) Cambiar la variable de entorno dentro del archivo .env con nombre `REACT_APP_URL` por `http://localhost:3004`
2) Levantar el servicio apuntando al archivo db.json dentro de la carpeta src/apiFake del proyecto usando el comando `json-server -w db.json -p 3004`

### `¿Qué es lo que más te gustó de tu desarrollo?`

*La implementación de la mayoría de las funcionalidades para lograr una mejor interacción con el usuario.
*El uso de TypeScript para el tipado de datos con el fin de evitar un mayor número de errores 
*La opción de que pueda ser probado tanto de manera local como en la web.

### `Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?`

Me hubiera gustado implementar una mejor validación al formulario de agregar personaje, también cambiaría los input text por select option en la parte de color de ojos y cabello para limitar las opciones de usuario y evitar redundancia de datos. Hubiera agregado otro campo para que en el caso de que el personaje sea un estudiante, este pueda escoger la casa a donde pertenece, también hubiera asignado un spinner a cada petición de usuario o algo que indique que se realizó una acción al momento de consumir peticiones Ajax, y por último implementaría filtros de búsqueda para localizar a un personaje.

### `Pain point o bug`

Al querer implementar los servicios de agregar personaje, eliminar favoritos y agregar favoritos, tuve que buscar la forma de trabajar correctamente con la lógica de JSON Server.
La forma en que lo resolví fue agregar un id a todos los personajes, de tal forma que fuera secuencial independientemente de la ruta y al momento de agregar un personaje sumarlos para evitar que hubiera un conflicto, con esto se restructura el código implementado para que al momento de agregar un favorito, este pasara con un id único y no causara conflicto al eliminarlo.

