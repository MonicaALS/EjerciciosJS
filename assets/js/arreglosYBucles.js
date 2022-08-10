/*

Arrays o arreglos 

--Definicion 
Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar UN solo dato. 
En cambio, en un arreglos, guardamos MUCHOS datos a manera de lista. 


Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una 
estructura de datos 


// Ejemplo 1

let nombre = "Monica"; //Aqui se almacena un solo dato 

nombresArreglo = ["Mony", "Felipe", "Ivonne", "Brianna"];

arrayDatpsPrimitivos = ["Mony", 21, true, null, undefined];

--Formas de crear un array --

1.- Primera Forma 
Utilizando la palabra reservada "new Array"

var colores = new Array ("Mapita", "Primacolor", "BlancaNieves", 
"Faber Castell", "Norma", "Crayola");

En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

2.- Segunda Forma 
'La segunda forma se trata de crear un array solo usando corchetes. 
[]. Esta forma es la mas usada para crear un array en js

*/
/*
// Primera forma 
var colores = new Array (5); 
var colores = new Array ("Mapita", "Primacolor", "BlancaNieves", 
"Faber Castell", "Norma", "Crayola");


//Segunda forma 

var marcasDeColores2 = ["Mapita", "Norma", "Vividel", "BlancaNieves"];

*/

//Ejemplos de Arreglos
/*

listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Ejemplos de Arreglos sala 6

paisesDeLatam = ["Mexico", "Chile", "Peru", "Costa Rica", "Argentina"];
console.log(paisesDeLatam);

anime = ["naruto", "deathNote", "onePiece", "superCampeones", "dragonBall"];
console.log(anime);

listaMateriasEscuela = [
  "Matemáticas",
  "Español",
  "Biología",
  "Música",
  "Geografía",
  "Historia",
];
console.log(listaMateriasEscuela);

marcasDeAutos = ["Ford", "Nissan", "Subaru", "Chevrolet", "Lexus"];
console.log(marcasDeAutos);

listaDeColores = ["verde", "verdeazulado", "verdeoscuro", "verdeclaro"];
console.log(listaDeColores);

anime2 = [
  "Atack on titan",
  "Demon slayer",
  "JuJutsu Kaisen",
  "Deathnote ",
  "Fullmetal Alchemist",
];
console.log(anime2);

/*
-- Acceder a elementos de un array 
Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

-Posicion de los elementos , donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

//Posicion de los elementos de la lista del super 
0: "Leche"
1: "Papitas"
2: "Jabon"
3: "Nachos"
4: "Huevos"

Numero de elementos NO ES LO MISMO que su posicion

*/

/*

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper);

console.log("El producto en la posicion 1 es:" + listaDelSuper[1]);
console.log("El producto en la posicion 4 es:" + listaDelSuper[4]);
console.log("El producto en la posicion 2 es:" + listaDelSuper[2]);
console.log("El producto en la posicion 6 es:" + listaDelSuper[6]);

/*Encontramos que al tratar de seleccionar un elemento de nuestro indice que no existe, aparecera el mensaje undefined. 
Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su 
tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento 
recibe mas informacion */

/* 

--Array Asociativo 

Son arreglos donde cada elemento esta asociado no solo con su indice, si no que tambien 
esta asignado a un identificador. 


Sintaxis de un arreglo asociativo 



let propiedadesDeMiComputadora = {
  marca: "Asus", //la marca es mi identificador, y "Asus" es mi valor
  modelo: "GL552JX",
  procesador: "Intel Core i7",
  ram: "16 GB",
  almacenamiento: "1 TB",
};

console.log(propiedadesDeMiComputadora);
console.log(
  "La RAM de mi computadora es de: ",
  propiedadesDeMiComputadora["ram"]
);
console.log(
  "El marca de la computadora que elegiste es: ",
  propiedadesDeMiComputadora["marca"],
  "y su precio es de:",
  propiedadesDeMiComputadora["precio"]
);

let publicacionRedSocial = {
  nombre: "Mony",
  usuario: "@monyls",
  fecha: "Agosto",
  likes: "5000",
  descripcion: "Esta es una bonita foto de lasagna",
  ubicacion: "Estado de Mexico",
};

console.log(
  "Estas son las publicaciones de Agosto: ",
  publicacionRedSocial["fecha"]
);

/* 
Metodos de los arrays

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipulas los elementos de este
arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos. 

Podemos dividir estos metodos en 3: 

-Metodos transformadores
-Metodos accesores
-Metodos repetitivos (spoiler)




console.log("//////////////////////////////////");

var arrayDeEjemplo = [
  "Manzana",
  "Peras",
  "Mangos",
  "Mandarinas",
  "Uvas",
  "Sandia",
  "Fresas",
];

console.log("Este es un arreflo original de 7 elementos", arrayDeEjemplo);

//Metodos transformadores

//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log(
  "Agregamos la pitaya a nuestro arreglo de ejemplo:",
  arrayDeEjemplo
);

//pop(): Eliminar le ultimo elemento del arreglo
arrayDeEjemplo.pop();
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift():Agregamos uno o mas elementos al principio del arreglo
arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "Lichis");
console.log("Agregamos 4 elementos al inicio del arreglo", arrayDeEjemplo);

//shift(): Eliminar el primer elemento y devolver ese valor eliminado
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse() Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice() extraemos una seccion del arreglo o cadena, y devuelve una carrera nueva, copiando el arreglo
//(no se modifica nada, si no que creamos una copia)

var saludo1 = "Hola estoy aprendiendo arreglos en Generation";
var saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo3 = saludo1.slice(-9, -5); //Empieza a contar desde atras para adelante
console.log("Imprimimos la rebanada del arreglo original", saludo3);

//splice(); Modificar el arreglo en 3 formas distintas

//Eliminar elementos del arreglo
//Agregar elementos nuevos al arreglo
//Remplazar elementos que ya existen en el arreglo

/* 
Sintaxis basica 

splice (indice de inicio, cantidad de elementos a eliminar, nuevoelemento1 nuevoelemento1, etc.)

 -Indice de inicio: la posicion desde donde comenzamos a eliminar elementos. 
 (primer numero dentro del parentesis)
 -Cantidad de elementos a eliminar: numero de elementos a borrar (Segundo numero
    dento del parentesis)
- Elemento a agregar: los nuevos elementos que se agregan al arreglo 
    (Tercer elemento del parentesis)

    

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Estos es el nuevo arreglo con los meses borrados:", mesesDelAnio);

//Agregar elementos sin borrar nada del arreglo

let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(2,0, "Jueves", "Viernes", "Sabado");
console.log("Los nuevos dias de la semana son: ", diasSemana);

/*

Metodos 



var ensalada =["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length(): Nos permite saber el numero de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada",
ensalada.length);

//join(): Nos permite unir los elementos del arreglo con una cadena de texto 
console.log("Esta es una feliensalada: ", ensalada.join(" feli"));

//concat():nos permite unir dos o mas arreglos en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos 

let dulces = ["galletas", "chetos", "glorias", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces); 
console.log("Esta es mi mezcla", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo 

console.log("La posicion de los chetos de mi arreglo dulces:", dulces.indexOf("chetos"));


//lastindexOf():Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo 

console.log("La ultima posicion de las galletas es:", dulces.
lastIndexOf("galletas"));

//toString(): Nos permite convertir el array en una cadena de texto 
console.log(mezcla.toString());

//valueOf():nos permite devulver el  valor de  nuestro arreglo 
console.log(mezcla.valueOf());


//includes():Nos permite saber si un elemento existe o no dentro de un arreglo 
console.log("Asi podemos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos"));
//tru
console.log("Asi podemos saber si un elemento esta dentro del arreglo", mezcla.includes("panditas"));
//false

//Se determina si una matriz incluye un determinado elemento, con el uso de arrays se devuelve true o false :)


/*

------------Metodos repetidores de los arreglos-------------------------------
*/

//filter(): Recorre el array y devuelve uno nuevo con los elementos que cumplan la condicion. (Como un bucle)
/*
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numeros del 1 al 10", numeros);


//Filtraremos los datos del arreglo, Refactorizacion del codigo, hacer codigo mas pequeño (funcion flecha)
var numeros1al5 = numeros.filter(numero => numero <5);
console.log("Estos son los numeros que cumplen la condicion de ser menores que 5", numeros1al5);

var numeros6al9 = numeros.filter(numero => numero>=6 && numero<10); 
console.log("Estos son los numeros que cumplen la condicion al ser mayores que 5 y menores que 10", numeros6al9);


/*function filtro(numero){
    if numero <5 
    //Hacer este pedazo de codigo 
};

filtro(); 


//map(): Recorrer el arreglo, modificar los elementos presentes en el y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original

var map = numeros.map(numeros => numeros *3); 
console.log("Estos son los numeros multiplicados por 3", map); 


//Ejercicio improvisado tablas del 1 al 10 

var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tabla2 = arregloBase.map(numeros => numeros * 2);
console.log("Esta es la tabla del 2", tabla2); 


//Esta es una tabla que toma una variable global (funciona, pero no es lo que debemos de hacer)
var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tabla3 = arregloBase.map(numeros => numeros * 3);
console.log("Esta es la tabla del 3", tabla3);

/*
forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itera del array. 
Al igual que otros iteradores como el map o el filter, este metodo recibe algunos parametros

  -Elemento actual: elementos del arreglo que se va a evaluar o sobre el que 
  hace la iteracion. 
  -Indice: La posicion que tiene el elemento dentro del arreglo
  -El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion. 

  ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS
  MODIFICADOS
  
  

  //Ejemplo para remover el primer numero impar de un arreglo
  let listaNumeros = [3, 6, 8, 10, 12];
  let impar = 3; 

  listaNumeros.forEach(function(numero){ //Por cada elemento dle arreglo ejecuta la funcion
    if (numero == impar){
        listaNumeros.shift(); 
    
    }
  });

  console.log("Estos son los elementos del array que no son impares", listaNumeros); 


/* 

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base
en una condicion. Las condiciones normalmente devuelven un true o false al ser 
evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicio 
se vuelva false

Normalmente tenemos 3 ciclos 
-While (mientras)
-Do while  (hacer mientras)
-For (para)

Tenemos otras sentencias mas especificas:
-for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo 
obtenemos LA POSICION. 


-for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo
obtenemos SU VALOR.

*/ 

/* 
SENTENCIA WHILE (mientras)

Esta sentencia nos va a permitir recorrer un bloque de codigo, SIEMPRE que se
cumpla una condicion especifica donde el resultado debe ser true

La estructura del WHILE es: 

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar 
}


*/

//Contdor sencillo 

let valorInicial = 0 //Declaramos un valor inicial en 0 
while (valorInicial <5){ //mientras el valor inicial sea <5
    valorInicial ++; //Ejecutamos este bloque de codigo (1 en 1)
    console.log(valorInicial); //Imprimimos los resultados 

}
//La sentencia while se ejecuta mientras se sigan obteniendo resultados positivos (true), y hasta que el resultado sea false, se para. 
//Practica grupal: Escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero 


let numeroInicial = 1;
let valorLimite = prompt("Hola, por favor ingresa un numero positivo que sea el limite");

while (numeroInicial <= valorLimite){ //mientras el numeroInicial sea menor que el limite, ejecutamos lo de abajo 
    if (numeroInicial % 2!=0){ //si al dividir el numero inicial entre dos el residuo es diferente a 0 (impar)..
    console.log(numeroInicial); //Imprimimos el valor de la variable 

}

numeroInicial++; //e incrementamos de uno en uno nuestra variable inicial5rt

}

/* 

Ingresamos un 10
1 es menor o igual a 10? si 
entonces dividimos 1 entre 2. El residuo es diferente de 0? si 
entonces imprimimos el inicial que es 1 
termina el bucle, imprimimos el numero inicial que es 1 
sumamos uno al inicial 
inicial ahora vale 2

Ingresado limite 10
inicial ahora vale 2 
2 es menos o igual a 10? si
entonces dividimos 2 entre 2. El residuo es diferente de 0? no 
no imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 3

Ingresado limite 10
inicial ahora vale 3
3 es menos o igual a 10? si
entonces dividimos 3 entre 2. El residuo es diferente de 0? si
imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 4

Ingresado limite 10
inicial ahora vale 4
4 es menos o igual a 10? si
entonces dividimos 4 entre 2. El residuo es diferente de 0? no 
no imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 5

Ingresado limite 10
inicial ahora vale 5
5 es menos o igual a 10? si
entonces dividimos 5 entre 2. El residuo es diferente de 0? si
imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 6

Ingresado limite 10
inicial ahora vale 6
6 es menos o igual a 10? si
entonces dividimos 6 entre 2. El residuo es diferente de 0? no 
no imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 7

Ingresado limite 10
inicial ahora vale 7
7 es menos o igual a 10? si
entonces dividimos 7 entre 2. El residuo es diferente de 0? si
imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 8

Ingresado limite 10
inicial ahora vale 8
8 es menos o igual a 10? si
entonces dividimos 8 entre 2. El residuo es diferente de 0? no 
no imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 9

Ingresado limite 10
inicial ahora vale 9
9 es menos o igual a 10? si
entonces dividimos 9 entre 2. El residuo es diferente de 0? si
imprimimos el valor del inicial 
sumar uno al inicial 
inicial vale 10

Ingresado limite 10
inicial ahora vale 10
10 es menos o igual a 10? si
entonces dividimos 10 entre 2. El residuo es diferente de 0? no 
no imprimimos el valor del inicial 
fin
*/

/* Do While (Hacer mientras o hacer hasta)

El bucle do while nos sirve para ejecutar una sentencia especificada hasta que la condicion de aprobacion 
se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como 
resultado que la sentencia especificada se ejecuta al menos una vez 

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. 
Con el do while, ejecutamos la instruccion al menos una vez y luego preguntamos la condicion. 

Estructura basica de un do while 

palabraReservada do{

    //Codigo a ejecutar 

}

while(condicion);

*/ 

//Ejemplo 1

let numerito = 0; //Declaramos la variable 0 
do{//Esto se hara 
console.log("El numero es:" + numerito); //imprimimos
numerito ++; //aumentamos de 1 en 1 
}
while (numerito <=10);//...hasta que el numero sea menor o igual a 10 

//while vs do while 

console.log("While"); 
let numeroWhile = 0  //iniciamos en 0 
while(numeroWhile <5){ //mientras variable sea menor a 5 
    numeroWhile ++; //la incremento en 1 
    console.log(numeroWhile); //la imprimo
}


console.log("Do While");
let numeroDoWhile = 0; //iniciamos en 0 
do{//hacemos esto...
    console.log(numeroDoWhile); //imprimir 
    numeroDoWhile ++; // aumentar en 1 

}
while (numeroDoWhile<5); //mientras numero sea menor a 5 

/*Sentencia FOR (para)

Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while 
porque le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos, Pasa esto 
tenemos tres elementos: 

-El valor inicial de la variable que vamos a iterar (i = 0)
-Condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
-La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}

*/

//Ejemplo: 

console.log("For");
for (let i= 0; i< 10; i++){
    console.log(i);
}

let animalitosDelBosque = ["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones En el arreglo 

for (posiciones in animalitosDelBosque){
    console.log(posiciones)

}
//of: valores del arreglo 

for(valores of animalitosDelBosque){
    console.log(valores)
}

//for in (lo que vamos a buscar en el arreglo)
//for of (lo que vamos a buscar del arreglo )