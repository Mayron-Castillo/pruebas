// //Suma de dos números Crea una función de flecha que reciba dos números como parámetros y devuelva su suma.

// const suma = (num1, num2) =>{ return num1+num2;}

// console.log(suma(1,2));

// //Número impar o par Crea una función de flecha que reciba un número como parámetro y devuelva "Par" si el número es par, o "Impar" si es impar.

// const par = (num) =>{
//     if(num % 2 === 0){
//         return `el numero ${num} es par`;
//     } else{
//         return `el numero ${num} es impar`;
//     }
// }

// console.log(par(4));

//Usa un for para imprimir los números del 10 al 1 en orden descendente.
// for(let i=10; i>0; i--){
//     console.log(i);
// }

//Usa un for...in para recorrer un objeto con información de un auto (marca, modelo, año) e imprimir sus claves y valores.
// const auto = {
//     marca: 'BMW',
//     modelo: 'X6',
//     año: 2025
// }

// for(let valor in auto){
//     console.log(valor, auto[valor]);
// }

//Usa un for...of para recorrer un array de nombres e imprimir cada nombre en mayúsculas.
// const names = ['Arturo', 'Pedro', 'Andres'];

// for(let name of names){
//     console.log(name.toUpperCase());
// }

//Usa un for...of para contar cuántas veces aparece la letra "a" en una palabra.
// const palabra = 'Holaa mundo';
// let contador = 0;
// for(let letra of palabra){
//     if(letra === 'a'){
//         contador++;
//     }
// }
// console.log(`se encontraron: ${contador} "a" en ${palabra}`);

//Usa un for...of para recorrer un array de números y mostrar la suma total.
// const numbers = [1,2,3,4,5];
// let suma = 0;

// for (let num of numbers) {
//     suma += num;
// }

// console.log(suma);


//Filtrar números mayores a 10 Dado un array de números, crea una función de flecha que devuelva un nuevo array solo con los números mayores a 10.

// let numeros = [1,5,10,3,12,7,16]; //10,12,16 o 12,16

// let numerosFiltrados = numeros.filter((numero) =>{ 
//     return numero >= 10;
// });

// console.log(numerosFiltrados);

// //Multiplicación de elementos de un array Crea una función de flecha que reciba un array de números y devuelva el producto de todos los elementos.

// let multiplicacion = [1,2,3,4]; // 24
// let producto = 1;
// const multiplicacionArray =  multiplicacion.forEach((num)=>{
//     producto *= num;
//     console.log(producto);
// });

// console.log(producto);

// //Usando map y filter Dado el siguiente array de objetos, crea una función de flecha que filtre los elementos 
// // con una edad mayor a 18 y luego les añada una propiedad "adulto": true.

// const personas = [
//     { nombre: "Ana", edad: 25 },
//     { nombre: "Luis", edad: 16 },
//     { nombre: "Carlos", edad: 20 }
// ];

// const edad = personas.map((age) =>{
//     if(age.edad > 18){
//         return age.adulto = true;
//     } else{
//         return age.adulto = false;
//     }
// })

// console.log(personas);


// // const edad = personas.filter((age) =>{
// //     return age.edad > 18;
// // })
// // console.log(edad);

// // const agregar = edad.map((add) =>{
// //     return add.adulto = true;
// // });

// // console.log(personas);

// // Dado el siguiente array de números, usa .forEach() para imprimir cada número multiplicado por 2.
// const numeros = [1, 2, 3, 4, 5];
// let arrayVacio = [];

// numeros.forEach((num) => {
//     arrayVacio.push(num*2); 
// })

// console.log(arrayVacio);

//Tienes un array de nombres. Usa .map() para crear un nuevo array donde cada nombre esté en mayúsculas.

// const nombres = ['ana', 'juan', 'sofia'];

// const nombreMayusculas = nombres.map((name) =>{
//     return name.toUpperCase();
// })

// console.log(nombreMayusculas);

//Dado un array de edades, usa .filter() para crear un nuevo array con las edades mayores o iguales a 18.

// const edades = [12, 25, 8, 19, 30, 15];

// const esMayor = edades.filter((age)=>{
//     return age > 18;
// })

// console.log(esMayor);

//Dado un array de precios, usa .reduce() para calcular el total de la compra.

// const precios = [10, 20, 30, 40];

// const totalPrecio = precios.reduce((uno,dos)=>{
//     console.log(uno);
//     console.log(dos);
//     return uno+dos;
// })

// console.log(totalPrecio);

//Dado un array de objetos que representan productos, usa .find() para encontrar el producto con el nombre "Laptop".

// const productos = [
//     { nombre: 'Celular', precio: 500 },
//     { nombre: 'Laptop', precio: 1200 },
//     { nombre: 'Tablet', precio: 300 }
// ];

// const searchProduct = productos.find((e)=>{
//     return e.nombre === 'Laptop'
// })

// console.log(searchProduct);

//Dado un array de calificaciones, usa .some() para verificar si alguna es mayor o igual a 90.

// const calificaciones = [70, 92, 85, 65, 88];

// const aprobo = calificaciones.some((cal)=>{
//     console.log(cal);
//     return cal >= 90;
// })

// console.log(aprobo);

//Dado un array de temperaturas, usa .every() para verificar si todas son mayores a 0.

// const temperaturas = [10, 25, 5, 3, 12];

// const temperaturaActual = temperaturas.every((temp) =>{
//     return temp > 0;
// })

// console.log(temperaturaActual);

// Dado un array de números, usa .sort() para ordenarlos de mayor a menor.

// const numeros = [4, 2, 9, 1, 5];

// const orden = numeros.sort((a,b)=>a-b);

// console.log(orden);

//Ejercicio con .split(): Dado un array de frases, usa .split() para convertir cada frase en un array de palabras. Luego, imprime el número de palabras en cada frase.
// const frases = ["El sol brilla", "La luna está llena", "Hoy es un buen día"];
// // Usa .split() para dividir las frases y contar las palabras
// for(let frase of frases){
//     const palabra = frase.split(' ');
//     console.log(palabra);
//     console.log(palabra.length);
// }

// Ejercicio con .join(): Dado un array de números como cadenas (por ejemplo, ["5", "10", "15"]), usa .join() para unirlos en una sola cadena separada por guiones ("-").
// const numeros = ["5", "10", "15"];
// // Usa .join() para unir los números con guiones
// const numerosSeparados = numeros.join('-');
// console.log(numerosSeparados);


//Ejercicio combinado con .split() y .join(): Tienes una cadena que contiene varias palabras separadas por comas. Usa .split() para dividir la cadena 
// en un array de palabras y luego usa .join() para juntar las palabras en una cadena, pero esta vez separadas por espacios en lugar de comas.
// const lista = "manzana,plátano,cereza,sandía";
// // Primero usa .split() y luego usa .join()
// const listaArray = lista.split(',').join(' ');
// console.log(listaArray);

//Dado un array de números, crea un nuevo array con los números impares duplicados.

// const numeros = [3, 8, 5, 12, 7]; 

// const numerosDuplicados = numeros.filter((e)=>{
//     if(e % 2 !== 0){
//         return e;
//     }
// })

// const resultadoTotal = numerosDuplicados.map((e)=>{
//     return e*2;
// })

// console.log(resultadoTotal);


//Dado un array de números, encuentra el primer número negativo.
// const numbers = [4, -3, 7, -1, 9];

// const negative = numbers.find((num)=>{
//     return num < 0;
// }) 

// console.log(negative);


//Dado un array de números, cuenta cuántos son mayores a 50.

// const valores = [10, 60, 45, 80, 30];
// let contador = 0;

// const numeroMayor = valores.filter((e)=>{
//     return e > 50;
// })

// console.log(numeroMayor.length);

//Dado un array de nombres, genera un nuevo array donde cada nombre comience con mayúscula.
// const nombres = ['ana', 'juan', 'sofia'];

// const primeraMayusc = nombres.map((e)=>{
//     return e[0].toUpperCase()+e.substring(1);
// });

// console.log(primeraMayusc);

//Dado un array de productos (con nombre, precio y descuento en %), calcula el total de los precios con el descuento aplicado.
// const productos = [
//     { nombre: 'Camisa', precio: 50, descuento: 10 },
//     { nombre: 'Pantalón', precio: 80, descuento: 20 },
//     { nombre: 'Zapatos', precio: 100, descuento: 50 }
// ];

// const precioIva = productos.map((e)=>{
//     let precio = e.precio;
//     let descuento = e.descuento;
//     let precioDescontado = precio*descuento/100;
//     let precioTotal = precio-precioDescontado;
//     return precioTotal
// })

// const precioFinal = precioIva.reduce((a,b)=>{
//     return a+b;
// },0);

// console.log(precioFinal);

//Dado un array de números, genera un nuevo array que elimine los números duplicados.
// const numeros = [1, 2, 3, 4, 3, 2, 5, 6, 5]; 
// let unicos = [...new Set(numeros)]
// console.log(unicos);

// Dado un array de productos (con nombre y precio), devuelve un nuevo array con los nombres de los productos que cuesten más de 100.

// const productos = [
//     { nombre: 'Laptop', precio: 1200 },
//     { nombre: 'Mouse', precio: 25 },
//     { nombre: 'Teclado', precio: 150 },
//     { nombre: 'Monitor', precio: 300 }
// ];

// const mayores = productos.filter(e => e.precio > 100)
// const nombreProducto = mayores.map(e => e.nombre)

// console.log(nombreProducto);

//Dado un array de palabras, devuelve un nuevo array con las palabras que tienen más de 5 letras.
// const palabras = ['sol', 'montaña', 'luz', 'programación', 'cielo'];

// const numeroLetras = palabras.filter(e => e.length > 5)

// console.log(numeroLetras);

//Ejercicio con objetos: Crea un objeto que represente un libro con las propiedades titulo, autor, anio y genero. 
//Desestructura el objeto para extraer sus propiedades y asignarlas a variables. Luego, muestra en consola el titulo y genero.

// const libro = {
//     titulo: 'SiSISISisis',
//     autor: 'yo',
//     anio: 2025,
//     genero: 'terror'
// };

// let tituloGenero = `El titulo es: ${libro.titulo} y el genero es: ${libro.genero}`

// console.log(tituloGenero);

//Ejercicio con arrays: Dado el siguiente array: [5, 10, 15, 20], desestructura sus elementos para asignar 
// los dos primeros valores a variables y muestra el resultado.

// let array = [5, 10, 15, 20];

// const [primerNumero,segundoNumero] = array;

// console.log(primerNumero);
// console.log(segundoNumero);

// Desestructura tanto el objeto como el array, y luego muestra el nombre y el primer hobby del usuario.

// const usuario = {
//     nombre: "Carlos",
//     edad: 25,
//     hobbies: ["leer", "correr", "viajar"]
// };

// const {nombre,hobbies} = usuario;

// console.log(hobbies);
// const [primerHobbie] = hobbies


// console.log(`Nombre: ${nombre}, de hobbie: ${primerHobbie}`);

//Ejercicio avanzado: Crea un objeto de una película con las propiedades titulo, director, anio, genero, reparto.
//Desestructura el objeto para obtener el titulo, director y el primer actor del reparto. Luego, 
//cambia el nombre del primer actor por otro y muestra el objeto actualizado.

// const pelicula = {
//     titulo : 'asda',
//     director :  'soyYo',
//     anio : 2025,
//     genero : 'drama',
//     reparto : ['Lamine yamal','pepe', 'pedro']
// };

// const {titulo, director, reparto} = pelicula;
// const [primerNombre] = reparto;

// console.log(titulo);
// console.log(director);
// console.log(primerNombre);

// pelicula.reparto[0] = 'Pedri'
// console.log(pelicula);

//Crea un objeto que represente un automóvil con las propiedades marca, modelo, anio, color y precio. 
// Desestructura el objeto para obtener marca, modelo y precio, y muestra el resultado en consola.

// const auto = {
//     marca: 'BMW',
//     modelo: 'X6',
//     anio: 2025,
//     color: 'Negro',
//     precio: '$100,000'
// }

// const {marca, modelo, precio} = auto;

// console.log(`La marca del auto es: ${marca}, de modelo: ${modelo}, con un precio de ${precio}`);

//Desestructura solo las propiedades nombre y salario, y muestra un mensaje con el nombre y el salario.
// const empleado = {
//     nombre: "Ana",
//     puesto: "Desarrolladora",
//     salario: 45000,
//     ubicacion: "Costa Rica"
// };

// const {nombre, salario} = empleado;

// console.log(`El salario de ${nombre}, es de ${salario} colones`);

// Ejercicio 3: Crea un objeto pelicula con las propiedades titulo, anio, genero, director y reparto (donde reparto es un array con varios actores). 
// Desestructura el objeto para obtener el titulo, anio y el último actor del reparto. Luego, muestra el título de la película y el último actor.

// const pelicula = {
//     titulo : 'asda',
//     director :  'soyYo',
//     anio : 2025,
//     genero : 'drama',
//     reparto : ['Lamine yamal','pepe','pedro']
// };

// const {titulo, director, reparto} = pelicula;
// const [, , ultimoNombre] = reparto;

// console.log(titulo, ultimoNombre);

//Desestructura los primeros tres números y muestra el resultado.
// const numeros = [100, 200, 300, 400, 500];

// const [uno,dos,tres] = numeros;

// console.log(uno,dos,tres);

//Desestructura el array para obtener la primera y tercera fruta, y muestra un mensaje con esas frutas.
// const frutas = ["manzana", "banana", "naranja", "kiwi"];

// const [una, ,tres] = frutas;
// console.log(una, tres);


//Desestructura el array para obtener el titulo y autor del primer libro, y muestra el resultado.
// const libros = [
//     { titulo: "1984", autor: "George Orwell" },
//     { titulo: "To Kill a Mockingbird", autor: "Harper Lee" },
//     { titulo: "The Great Gatsby", autor: "F. Scott Fitzgerald" }
// ];

// const [uno] = libros;
// const {titulo, autor} = uno;

// console.log(titulo, autor);
// console.log(uno);

//Desestructura el objeto para obtener el nombre, la edad, y la ciudad de la dirección. Luego, muestra un mensaje con el nombre y la ciudad.
// const persona = {
//     nombre: "Javier",
//     edad: 30,
//     direccion: {
//         calle: "Av. Central",
//         ciudad: "San José",
//         pais: "Costa Rica"
//     }
// };

// const {nombre,edad, direccion} = persona;
// const {ciudad} = direccion;

// console.log(`Nombre: ${nombre} de la ciudad: ${ciudad}, de ${edad} anios de edad`);

// Ejercicio 1 (Arrays con spread):
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr, 6,7,8];
// console.log(arr2);

// const person = { name: "Sarah", age: 28 };
// const city = {...person, city: 'San Jose'};

// console.log(city);

//Crea una función multiplyNumbers que reciba al menos dos números y los multiplique. Usa el operador rest para poder pasar cualquier cantidad de números.

// const multiplyNumbers = (...numeros) =>{
//     return numeros.reduce((arg1, arg2) => arg1 * arg2)
// };

// console.log(multiplyNumbers(2,3,4));

// const mergeInfo = ({name,age}, ...info) => {
//     const combinado = {...{name, age}, ...info };
//     console.log(combinado);
// }

// mergeInfo({name: 'Mayron', age:22}, {hobbies: 'Programar', job:'frontened'});

//Crea una función que devuelva una promesa que se resuelva después de 3 segundos con el mensaje "Proceso completado".

// function obtenerPromise(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             let intento = true;
//             if(intento) {
//                 resolve('Proceso completado');
//             } else{
//                 reject('Hubo un problema')
//             }
//         },3000);
//     });
// };

// obtenerPromise()
//   .then(response => console.log(response))
//   .catch(error => console.error(error));

//Convertir Promesas a async/await
// function getNumber() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(42), 2000);
//     });
// }

// async function mostrarNumero(){
//     const num = await getNumber();
//     console.log(num);
// }

// mostrarNumero();

//Crea una función fetchUserData(id) que simule la obtención de datos de un usuario con un 50% de probabilidad de fallar.
//-Si la operación es exitosa, debe devolver un objeto { id, name: "Usuario" } después de 2 segundos.
//-Si falla, debe lanzar un error "No se pudo obtener el usuario".

// function fetchUserData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const success = Math.random() > 0.5; // 50% de probabilidad de éxito

//         if (success) {
//             resolve({ id, name: "Usuario" });
//         } else {
//             reject("No se pudo obtener el usuario");
//         }
//         }, 2000);
//     });
// }

// async function getUser(id) {
//     try {
//         const user = await fetchUserData(id);
//         console.log("Usuario obtenido:", user);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Prueba la función
// getUser(1);

// const lista = document.querySelector('#lista');
// console.log(lista);

// async function obtenerApi(){
//     try {
//         let data = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
//         const resultado = await data.json();
//         console.log(resultado);
//         let latitud = resultado.latitude;
//         let tiempo = resultado.current.time;
//         let elevacion = resultado.elevation;
//         let intervalo = resultado.current_units.time;

//         const anadirLatitud = document.createElement('p');
//         anadirLatitud.textContent = `La latitud actual es de: ${latitud}`;
//         lista.appendChild(anadirLatitud);
//         const anadirTiempo = document.createElement('p');
//         anadirTiempo.textContent = `Hora actual es de: ${tiempo}`;
//         lista.appendChild(anadirTiempo);
//         const anadirElevacion = document.createElement('p');
//         anadirElevacion.textContent = `La elevacion actual es de: ${elevacion}`;
//         lista.appendChild(anadirElevacion);
//         const anadirIntervalo = document.createElement('p');
//         anadirIntervalo.textContent = `El intervalo actual es de: ${intervalo}`;
//         lista.appendChild(anadirIntervalo);

//     } catch (error) {
//         console.error(error);
//     }
// }

// obtenerApi();

//Obtener los titulos de la API y devolver un array con los titulos
//👉 https://jsonplaceholder.typicode.com/posts

// async function getAllPosts(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if(!response.ok){
//             throw new error('Error al obtener las publicaciones');
//         }

//         const posts = await response.json();
//         return posts.map(post => post.title);

//     }catch (error) {
//         console.error(error);
//         return [];
//     }
// }

// getAllPosts().then(titles => console.log(titles));

// function contador(){
//     let contador = 16;
//     const interval = setInterval(()=>{
//         contador--;
//         console.log(`Cuenta regresiva: ${contador}`);

//         if(contador === 0){
//             clearInterval(interval);
//             console.log('Cuenta regresiva finalizada!');
            
//         }
        
//     },1000);
// }

// contador();

//Extrae e imprime el nombre y correo del usuario de la API 'https://jsonplaceholder.typicode.com/users/1' y lo muestre como un objeto.
// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         if(!response.ok){
//             throw new Error('Error');
//         }
//         const data = await response.json();
//         return {name: data.name, email: data.email};     
//     } catch (error) {
//         console.log(error);
//     }    
// }
// getData().then(res => console.log(res));

// 📌 Objetivo: Encadenar múltiples promesas.

// 🔹 Instrucciones:

// Crea una función que devuelva una promesa que se resuelva con un número aleatorio después de 2 segundos.
// Luego, encadena una segunda promesa que tome ese número y lo multiplique por 2 después de otros 2 segundos.
// Finalmente, encadena una tercera promesa que sume 5 al resultado final.
// Imprime el resultado en la consola.

// function cadenaPromesas(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const numeroAleatorio = Math.floor(Math.random()*10)+1;
//             resolve(numeroAleatorio);
//         },2000)
//     })
// }
// cadenaPromesas()
//     .then((numero) =>{
//         console.log(`Numero aleatorio es: ${numero}`);
//         return numero*2;
//     })
//     .then((doble)=>{
//         console.log(`Multiplicado por dos es: ${doble}`);
//         return doble+5;
//     })
//     .then((resultadoFinal) =>{
//         console.log(`Sumado a 5 nos da: ${resultadoFinal}`);
//     })
//     .catch(error => console.error(error));

//hacer una funcion asincrona que muestre solo los primeros 3 usuarios y su infomacion respectiva
// async function obtenerDatos(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/');
//         if(!response.ok){
//             throw new Error("Hay un error");
//         }
//         const data = await response.json();
//         const tresUsuarios = data.slice(0,3);
//         console.log(tresUsuarios);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// obtenerDatos();

// Ejercicio, usando promises, async await y setTimeout, en el que si el numero es menor a 5 devuelve error
// function obtenerNumero() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const numero = Math.floor(Math.random() * 10) + 1;
//         if (numero < 5) {
//             reject("Número muy bajo, vuelve a intentarlo.");
//         } else {
//             resolve(numero);
//         }
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         const numero = await obtenerNumero();
//         console.log("Número obtenido:", numero);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// main();

// async function weather() {
//     try {
//         const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
//         if(!response.ok){
//             throw new Error("error");
//         }
//         const data = await response.json();
//         console.log(data.latitude);
//         console.log(data.timezone);    
//     } catch (error) {
//         console.log(error);
//     }

// }
// weather();


//Crea una clase llamada Persona con las propiedades nombre y edad. También debe tener un método saludar() que imprima un mensaje con el nombre de la persona.
// class Persona {
    // constructor(name,age){
    //     this.name = name;
    //     this.age = age;
    // }

    // saludar(){
    //     console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
    // }
// }

// const persona1 = new Persona("Juan", 25);
// persona1.saludar(); 

//Extiende el ejercicio anterior agregando un getter y setter para la propiedad edad, asegurándote de que la edad no sea negativa.
// class Persona {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
    
//     get edad(){
//         return this.age;
//     }

//     set edad(age){
//         if(age > 0){
//             this.age = age;
//         }else{
//             console.log("La edad debe ser mayor a 0");
//         }
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
//     }
// }

// const persona2 = new Persona("Ana", 30);
// persona2.edad = -5; 
// console.log(persona2.edad); 


//Crea una clase Estudiante que herede de Persona. Además de nombre y edad, debe tener una propiedad curso y un método estudiar() que imprima un mensaje.
// class Persona {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
    
//     get edad(){
//         return this.age;
//     }

//     set edad(age){
//         if(age > 0){
//             this.age = age;
//         }else{
//             console.log("La edad debe ser mayor a 0");
//         }
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
//     }
// }

// class Estudiante extends Persona {
//     constructor(name,age,curso){
//         super(name,age);
//         this.curso = curso;
//     }

//     estudiar(){
//         console.log("Estoy estudiando JavaScript.");
//     }
// }

// const estudiante1 = new Estudiante("Carlos", 20, "JavaScript");
// estudiante1.saludar(); 
// estudiante1.estudiar(); 

//Crea una clase Calculadora con un método estático sumar(a, b) que devuelva la suma de dos números.
// class Calculadora {
//     sumar(a, b){
//         return a+b;
//     }
// }

// const calc = new Calculadora()
// console.log(calc.sumar(5, 3));

//Modifica la clase CuentaBancaria para que la propiedad saldo sea privada y solo 
// pueda modificarse mediante los métodos depositar y retirar.

// class CuentaBancaria {
//     #saldoDeCuenta;

//     constructor(saldo){
//         this.#saldoDeCuenta = saldo;
//     }

//     depositar(cantidadDeposito){
//         if(cantidadDeposito <= 0){
//             console.log('Ingresa un monto correcto');
//             return;
//         }
//         this.#saldoDeCuenta = this.#saldoDeCuenta + cantidadDeposito;
//         console.log(`Has depositado $${cantidadDeposito} y tu saldo actual es de: $${this.#saldoDeCuenta}`);
        
//     }

//     retirar(cantidadRetiro){
//         if(cantidadRetiro <= 0){
//             console.log('Ingresa un monto correcto a retirar');
//             return
//         }
//         if(cantidadRetiro > this.#saldoDeCuenta){
//             console.log(`Fondos insuficientes, tu saldo actual es de $${this.#saldoDeCuenta}`);
//             return;
//         }
//         this.#saldoDeCuenta = this.#saldoDeCuenta - cantidadRetiro;
//         console.log(`La cantidad de dinero retirado es de $${cantidadRetiro} y tu saldo actual es de $${this.#saldoDeCuenta}`);
//     }
    
//     obtenerSaldo(){
//         return this.#saldoDeCuenta;
//     }
// }

// const cuenta = new CuentaBancaria(1000);
// cuenta.depositar(200);
// cuenta.retirar(1200);
// console.log(cuenta.obtenerSaldo());

//🔹 Ejercicio 1: Cambiar contenido de un elemento
// Crea un botón y un párrafo en HTML. Cuando el usuario haga clic en el botón, cambia el texto del párrafo.

// const parrafo = document.querySelector('.parrafo');
// const boton = document.querySelector('.boton');

// boton.addEventListener("click", ()=>{
//     parrafo.textContent = 'mundo';
// })

//🔹 Ejercicio 2: Cambiar estilos dinámicamente
// Crea un botón que, al hacer clic, cambie el color de fondo de la página.

// const boton = document.querySelector('.boton');

// boton.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = 'blue';
// })

//🔹 Ejercicio 3: Contador de clics
// Crea un botón y un párrafo que muestre un número. Cada vez que se haga clic en el botón, 
// el número debe aumentar.

// const parrafo = document.querySelector('.parrafo');
// const boton = document.querySelector('.boton');

// let contador = 0;

// boton.addEventListener("click", ()=>{
//     contador++;
//     parrafo.innerHTML = contador;
// });

//🔹 Ejercicio 4: Agregar elementos a una lista
// Crea un campo de entrada (input), un botón y una lista (ul). Cuando el usuario escriba un 
// texto y haga clic en el botón, agrega un nuevo li a la lista con ese texto.

// const input = document.querySelector(".input");
// const boton = document.querySelector(".boton");
// const lista = document.querySelector(".lista");

// boton.addEventListener("click", ()=>{
//     const agregar = document.createElement('li');
//     agregar.textContent = input.value;
//     lista.appendChild(agregar);
//     input.value = '';
// })

//🔹 Ejercicio 5: Eliminar elementos de una lista
// Extiende el ejercicio anterior y agrega un botón de "Eliminar" junto a cada elemento de la lista.

// const input = document.querySelector(".input");
// const boton = document.querySelector(".boton");
// const lista = document.querySelector(".lista");

// boton.addEventListener("click", ()=>{
//     const agregar = document.createElement('li');
//     const eliminar = document.createElement('button');

//     eliminar.textContent = 'eliminar';
//     agregar.textContent = input.value;
//     lista.appendChild(agregar);
//     agregar.appendChild(eliminar);

//     eliminar.addEventListener("click", ()=>{
//         agregar.remove();
//     })

//     input.value = '';
// })

// 🔹 Ejercicio 6: Modo oscuro y claro
// Crea un botón que alterne entre "Modo Claro" y "Modo Oscuro", cambiando los estilos de la página.

// const parrafo = document.querySelector(".parrafo");
// const boton = document.querySelector(".boton");

// boton.addEventListener("click", ()=>{
//     const cambioFondo = document.body;
//     cambioFondo.classList.toggle('cambio');
//     if(cambioFondo.classList.contains('cambio')){
//         boton.textContent = 'Modo Claro'
//     } else{
//         boton.textContent = 'Modo Oscuro'
//     }
// });

// 🔹 Ejercicio 7: Validación de formulario
// Crea un formulario con un campo de correo y un botón de envío. 
// Muestra un mensaje de error si el campo está vacío o el formato no es válido.

// const input = document.querySelector("#input");
// const boton = document.querySelector(".boton");

// boton.addEventListener("click", ()=>{
//     const validacion = input.value;
//     if(validacion === ''){
//         alert('el campo está vacío');
//         return;
//     }
//     if(validacion.includes('@gmail') && validacion.includes('.com')){
//         alert(`El correo es: ${validacion}`);
//         return;
//     }
//     alert('el formato no es válido');
// })

//🔹 Ejercicio 8: Galería de imágenes dinámica
// Muestra varias miniaturas de imágenes y cambia la imagen principal al hacer clic en una de ellas.
// const imagenes = document.querySelector(".image");
// const listaImagenes = document.querySelectorAll(".img");

// listaImagenes.forEach(img => {
//     img.addEventListener('click', () => {
//         const cambioImagen = imagenes.src;
//         imagenes.src = img.src;
//         img.src = cambioImagen;
//     });
// });


// practicando localStorage

// lst = [{
//     name:'Mayron',
//     age: 22
// }, {
//     name: 'Andres',
//     age: 22
// }];

// localStorage.setItem("list",JSON.stringify(lst));

// lst = JSON.parse(localStorage.getItem("list"));

// lst.forEach(e => {
//     let elements = document.getElementById("element");
//     let div = document.createElement("div");
//     div.textContent = `Nombre: ${e.name}: Edad: ${e.age}`;
//     elements.appendChild(div);
// });


//Contador de visitas
// Crea un contador de visitas en el navegador. Al recargar la página, el contador debe aumentar en 1.

// let contador = parseInt(localStorage.getItem('contador')) || 0;

// contador++;
// localStorage.setItem('contador', contador);

// const parrafo = document.querySelector(".parrafo");
// parrafo.textContent = `visitas en la página: ${contador}`;


//Api que muestra imagenes de perro aleatorias
// const url = 'https://dog.ceo/api/breeds/image/random';

// async function fetchDogImage() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         document.getElementById("dogImage").src = data.message; 
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchDogImage();


//Api que muestra una imagen de la criptomoneda Bitcoin
// const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';

// async function fetchCryptoData() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         document.querySelector('.parrafo').textContent = data.name;
//         document.getElementById("bitcoin").src = data.image.large;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchCryptoData();

//Practicando el meotodo POST
// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// async function dataPost() {
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json" 
//             },
//             body: JSON.stringify({ nombre: "Mayron", email: "Mayron@example.com" })
//         });

//         if (!response.ok) {
//             throw new Error(`Error ${response.status}: ${response.statusText}`);
//         }

//         const data = await response.json();
//         //null incluye todo, '2' espacios de identacion, es para verlo de una forma mas clara
//         console.log(`Usuario creado: ${JSON.stringify(data, null, 2)}`); 

//     } catch (error) {
//         console.error(`Error ${error}`);
//     }
// }

// dataPost();

//Usando POST, para registrar un usuario
// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// async function registerUser(name, email, password) {
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ name, email, password })
//         });

//         if (!response.ok) {
//             throw new Error(`Error ${response.status}: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log(`Usuario registrado: ${JSON.stringify(data,null,2)}`);
//     } catch (error) {
//         console.error(`Error al registrar usuario: ${error}`);
//     }
// }


// registerUser("Mayron", "mayron@example.com", "123456");

//Actualizar usuario con un metodo POST

// const UserApi = "https://jsonplaceholder.typicode.com/users";

// async function updateUser(userId, newData) {
//     try {
//         const response = await fetch(UserApi, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ userId, ...newData })
//         });

//         if (!response.ok) {
//             throw new Error(`Error ${response.status}: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log("Usuario actualizado con éxito:", data);
//     } catch (error) {
//         console.error("Error al actualizar usuario:", error);
//     }
// }

// updateUser(123, { name: "Mayron", email: "mayron.new@example.com" });


//Comprueba si una palabra se lee igual al revés.
// function esPalindromo(palabra) {
//     let invertida = palabra.split("").reverse().join("");
//     return palabra === invertida;
// }

// console.log(esPalindromo("reconocer")); // true
// console.log(esPalindromo("hola")); // false

// // Encuentra el número más grande en un array de números.
// function numeroMayor(array) {
//     let max = array[0];
//     for (let num of array) {
//         if (num > max) max = num;
//     }
//     return max;
// }

// console.log(numeroMayor([3, 8, 2, 10, 5]));

// //Calcula el factorial de un número n.

// function factorial(n) {
//     let resultado = 1;
//     for (let i = 1; i <= n; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }
// console.log(factorial(5));

// // Imprime números del 1 al 100 con reglas de FizzBuzz.

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//         else if (i % 3 === 0) console.log("Fizz");
//         else if (i % 5 === 0) console.log("Buzz");
//         else console.log(i);
//     }
// }

// fizzBuzz();

// //Cuenta cuántas veces aparece cada número en un array.
// function contarRepetidos(arr) {
//     let contador = {};
//     for (let num of arr) {
//         contador[num] = (contador[num] || 0) + 1;
//     }
//     return contador;
// }

// console.log(contarRepetidos([1, 2, 2, 3, 3, 3, 4])); 

// // Elimina los valores duplicados de un array.
// function eliminarDuplicados(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));

// // Genera los primeros N números de Fibonacci.
// function fibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib.slice(0, n);
// }

// console.log(fibonacci(6));





