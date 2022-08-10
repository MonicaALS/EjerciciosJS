//Ejercicios 


//Ejercicio 1 
function idCard(){
    let nombre = " Mony"
    let city = " Monterrey"
    let hobby = " Cantar"
    return `Hola, mi nombre es ${nombre} ,  vivo en ${city}, y disfruto ${hobby}.`; 

}

console.log (idCard());

//Ejercicio2 
function calcDogAge(){
    let humanYears = 7;
    let dogAge = 3
    let dogYears = humanYears * dogAge
    return `La edad de tu perro es ${dogYears} años Perrunos`; 
}

console.log (calcDogAge(`Firulais`, 9));
console.log (calcDogAge)

///////////////////////////////////////////////////



function par (numero) {
    let parametroNumero = numero;
    if (numero !=0){
        return alert (`$(numero) es un numero par`);

    } else  {
        return alert("$(numero)es un numero impar");


    }

}


function mayorDeEdad () {

    let añoActual = 2022
    let añoNacimiento = ("Ingrese su año de nacimiento"); 
    let edadUsuario = añoActual - añoNacimiento; 

    if(edadUsuario <= 17){
        alert ("Menor de edad, regresa en unos años");

    }else {alert("Bienvenido@")}
}


//Ejercicios de arreglos
var carrera = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log("Estos son las posiciones de la carrera", carrera);

carrera.splice(0,0, "Jorge") //Jorge adelanta a roberto 
carrera.splice(3, 1); 
carrera.splice(1,1,); //Roberto se lesiona
carrera.splice(0,0, "Ramiro") //Ramiro adelanta a Jorge
carrera.splice(3,1) 
carrera.splice(2,2, "Sofía", "Andrea") //Andrea baja una posicion 
//Ramiro mantiene su lugar
carrera.push("José") //José remplaza el quinto lugar 

console.log("Estos son los lugares a partir de la tercera vuelta", carrera);