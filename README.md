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

### Recorrido

> Al arrancar la app ingresando 'npm start' en la terminal, la aplicación nos ubicara en el index inmediatamente, desplegando la tarjeta del producto en cuestión y la barra de navegación.

> Para el propósito de este programa, nos serviremos de tres elementos de la barra de navegación:

- El ícono de Niños del Cerro en la esquina superior izquierda: Nos servirá para retornar a la pantalla inicial.
- El Formulario de Contacto, en el que podremos ingresar nuestra información de contacto para el correcto despacho de las mercancías.
- El botón que reza "Tienda". Al cliquear sobre él, nos llevará de vuelta a la vista principal de la tienda, con todos los ítems desplegados. Si cliqueamos sobre la flecha negra a su derecha, se desplegará un menú con enlaces a las distintas categorías de ítems a la venta.

> En primer lugar, es recomendable comenzar accediendo al "Formulario de Contacto". En la columna izquierda podremos ingresar nombre, número de teléfono y dirección de correo electrónico. Esta información será respaldada en el almacenamiento local del navegador para facilitar futuras visitas.

> En la columna de la derecha podremos consultar la información del último usuario que ingresó su información. Podremos sobreescribirla rellenando los campos nuevamente. Asimismo, también podremos eliminar cualquier rastro de nuestros datos (tanto en el navegador como en la aplicación) con el botón "Vaciar Datos".

> Luego de ingresar nuestros datos, podemos volver a la vista principal de la tienda haciendo click en el ícono de Niños del Cerro o en el enlace de la barra de navegación que indica "Tienda".

> Una vez ahí, podremos ver la tarjeta del producto dispuesto para esta prueba. Para acceder a él, es necesario hacer click en el botón "ver detalle" indicado a la base de su tarjeta.

> Esto nos dirigirá hacia la página particular del producto, que enlista sus detalles y nos permite agregar productos al carrito. 

> Para agregar productos al carrito, es necesario seleccionar la cantida utilizando los botones '+' y '-' para ello.

> Una vez agregada la cantidad de productos deseada, este número y el carrito aparecerán en la esquina superior derecha de la pantalla. Puedes utilizar tanto el ícono de carrito como el nuevo botón rotulado "ir al carrito" para dirigirte al carrito de compras.

> Una vez ahí en el carrito de compras, podrás revisar el detalle de tu compra, el subtotal de cada producto ingresado, y el valor total de tu compra. 

> Con los botones rotulados con 'x' junto a cada producto, podrás eliminar cada producto individualmente. 
> Con el botón rotulado 'Limpiar carro' podrás vaciar completamente tu carro de compras.
> Si estamos conformes con nuestra orden de compra y hemos corroborado que nuestros datos han sido ingresados correctamente, podremos enviar nuestro pedido con el botón rotulado 'Crear Orden'. Esto generará que tanto tu orden como la información que ingresaste será respaldada en la base de datos de Firestore.

### 