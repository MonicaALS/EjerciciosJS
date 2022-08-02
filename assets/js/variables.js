// Mejores practicas
// camelCase
// Utilizar mayusculas en la mitad de nuestras variables 
//variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
//No usar palabras reservadas para declarar una variable
//if, return, true, false, for, while, let, var, etc..

/* var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;

*/
//Seguir un standard personal

//Normalizar datos que se van a ingresar 
var tel= "+52 448 234 1212";

//Pueden contener numeros, letras, guion bajo, simbolo de dolar.

var a;
var a1;
var a_nombre;
var a$Direccion;

//Declaracion de variables
//Type number
var edad = 24; 
var peso = 78;
var miopia = 3;
var astigmatismo = 3;


//Type bolean

var ciego = true;
var hambre = false;
var bateria = false;
var ia = true;


//Type String
var nombre = "Monica Lopez";
var dir = "Monterrey";
var nacionalidad = 'Mexicano';

//Type null 
var ganasDeBibir = null; 
var nineros = null
var briAmonestaciones = null

var x, y, z = 4

// Variables undefined
var xx, yy, zz;

// Defined: es el amor que le damos a nuestro crush 
// Undefined: EL amor que nos tiene nuestro crush
// Null: El amor que nos decia tener nuestro ex 

// Var tres = 4, var dos= tres, var uno = tres
var uno = dos = tres = 4;

//Escribir en una sola linea variables undefined de nuestro carrito de compras


var catsun, cereal, rolloDeBaño, aceite, chocolate, pan, queso, leche, garrafonDeAgua;


// typeOf(); indica que tipo de dato es nuestra variable
// nos indica el tipo de dato al que pertenece nuestra variabe 


var a = 2;
typeof(a);
//number

var b = "2";
typeof(b);
//string 

var c = true; 
typeof(c)
//boolean

var d = null 
typeof(d)
//object <object de javaScript 

isNaN(d);
//false

//isNaN()es una funcion que nos permite verificar si un dato es o no es un numero

//NaN es tal cual un tipo de dato en JavaScript 
isNaN(NaN);
//true

var a = 2; 
Number.isNaN(a); 
//false

var b = "2"; 
Number.isNaN(b);
//false

var e = Nan; 
typeof(e)
//number 


//boolean

var aguaMty = false;
var hambre = true;
var lentes = true;
var cafesito = true;
var galletas = true;
var luzDeDia = true;
var sueño = true;
var noche = false;
var ciego = true;
var dolorEspalda = true;

//String 

var name = "Juan";
var lastName = "Perez";
var municipio = "Guadalajara";
var country = "Mexico";
var planet = "Earth";
var trabajo = "Programador";
var salut = "hola"; 
var vert = "verde"
var bonjour = "buenos dias"
var auRevoir = "adios"


//Number 

var percentageLeft = 10;
var primeMinisterNumber = 10;
var atomicNumberNeon = 10;
var romanX = 10;
var koranVowels = 10;
var knockoutBox = 10;
var greekDeca = 10;
var metricSystem = 10;
var fingersTotal = 10;
var daysWeek = 7;


//  Bad practices
var uno = 1;
var second = "1s";

// Why doesn't it work?
var if_condition =  true;


// Should equal formula for wild wings
var Buffalowings = wings + buffalo


// Null variable
var vacio;


// All variables should equal 1
var uno, one, wan, uma, um = 1;


// It's broken
console.log(1);


// Console.log para mostrar [area] de un cuadrado
console.log(ladoa * ladob);

// Should equal 4
var four = 2 + 2;

// Doesn't work for math problems
var pi = 3.141516;


//Ejercicio 1 

//boolean

var aguaMty = false;
var hambre = true;
var lentes = true;
var cafesito = true;
var galletas = true;
var luzDeDia = true;
var sueño = true;
var noche = false;
var ciego = true;
var dolorEspalda = true;

//String 

var name = "Juan";
var lastName = "Perez";
var municipio = "Guadalajara";
var country = "Mexico";
var planet = "Earth";
var trabajo = "Programador";
var salut = "hola"; 
var vert = "verde"
var bonjour = "buenos dias"
var auRevoir = "adios"


//Number 

var percentageLeft = 10;
var primeMinisterNumber = 10;
var atomicNumberNeon = 10;
var romanX = 10;
var koranVowels = 10;
var knockoutBox = 10;
var greekDeca = 10;
var metricSystem = 10;
var fingersTotal = 10;
var daysWeek = 7;



//var a =1;
//Nueva forma de declarar variables 

var a = 1;
let a = 1; 
//Constante
//Es una variable con un dato que no debe cambiar  
const a = 1; 
//Variables constantes deben mantenerse con un solo valor 
//no es  posible cambiar el valor posterior a su declaracion 

// Nos permite modificar su valor actual sin restricciones 
let a = 1; 
a = 2


const carritoCompras = ["Leche", "Tortilla", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const combinacion = [1, "Hola", null, "5"]
combinacion
// (4) [1, 'Hola', null, '5']


//Array empiezan a contar desde 0 
const carros = ["BMW", "Volvo", "Mercedes", "Ford"];

carros[1];
//Volvo

carros[0];
//BMW

