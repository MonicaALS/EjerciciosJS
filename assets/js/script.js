//Este es un comentario de una sola lines

/* Este es un comentario 
multilinea

Cierro asi -> */

// Una alerta es una ventana de dialogo que muestra un mensaje
//alert ("Hola Mony, estoy vivo!");  


/*Pedimos la informacion al usuario con un prompt la guardamos en una variable
llamada nombre para despues mostrarla */ 
nombre = prompt("Como te llamas?")


/*Usamos un console.log para mostrar lo que se guardo en la variable nombre*/
console.log (nombre);


// JS es case sensitive, por lo tanto si escribimos "Hola" y "hola" tendremos dos cosas distintas
nombre = "juan"
Nombre = "Juan"


//Programa para calcular el area de un triangulo 
base= prompt("Ingrese la base del triangulo")
altura=prompt ("Ingrese la altura del triangulo")
//Creamos una formula que utilice los datos ingresados
areaTriangulo=base*altura/2

alert("areaTriangulo");


//Concatenacion de mensaje + resultado
console.log("El area del triangulo es:" + areaTriangulo)
//CamelCase