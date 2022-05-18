# Curso React.js
## Entrega Final del curso de React

Alumno Felipe Villarrubia
comision 31145
Profesor Sebastían Zuviria
Tutor Camilo Griffa

## Instrucciones para realizar una compra

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