# Curso React.js
## Entrega Final del curso de React

Alumno Felipe Villarrubia
comision 31145
Profesor Sebastían Zuviria
Tutor Camilo Griffa

## Instrucciones para realizar una compra

### Preparar la base de datos

En primer lugar, para acceder al funcionamiento completo de la aplicación es necesario guardar algunos datos en la base de datos en Firestore para utilizar la aplicación. Para ello es necesario:

> Generar una colección de nombre 'categories'.
> En la colección 'categories', añadir el siguiente documento:
 - Compact disc
> A este documento, agregar el campo 'description' y rellenarlo con:
- Disco compacto en su Jewelcase
> A continuación, crear una segunda colección titulada 'products'
> En esta colección, añadir los siguientes campos y rellenarlos como se indica a continuación:
- category: "Compact Disc"
- description: "Primer Largaduración de Niños del Cerro"
- img: "/images/nonatocoo.jpg"
- name: "Disco Nonato Coo"
- price: 8000
- stock: 20
> Todos los valores recién indicados corresponden a strings exceptuando 'price' y 'stock'.

### Ubicación

> Al arrancar la app ingresando 'npm start' en la terminal, la aplicación nos ubicara en el index inmediatamente, desplegando la tarjeta del producto en cuestión.

> Para acceder a él, es necesario hacer click en el botón "ver detalle" indicado a la base de su tarjeta.

> Esto nos dirigirá hacia la página particular del producto, que enlista sus detalles y nos permite agregar productos al carrito. 

> Para agregar productos al carrito, es necesario seleccionar la cantida utilizando los botones '+' y '-' para ello.

> Una vez agregada la cantidad de productos deseada, este número y el carrito aparecerán en la esquina superior derecha de la pantalla. Puedes utilizar tanto el ícono de carrito como el nuevo botón rotulado "ir al carrito" para dirigirte al carrito de compras.

> Una vez ahí en el carrito de compras, podrás revisar el detalle de tu compra, el subtotal de cada producto ingresado, y el valor total de tu compra. 

- Con los botones rotulados con 'x' junto a cada producto, podrás eliminar cada producto individualmente. 
- Con el botón rotulado 'Limpiar carro' podrás vaciar completamente tu carro de compras.
- Con el botón rotulado 'Crear Orden' podrás enviar tu orden junto a los datos prefijados a la base de datos de Firestore.