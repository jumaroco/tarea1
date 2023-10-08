
// 1) Funcion que cuente el numero de caracteres de una cadena de texto
const contarCaracteres = (cadena) => {
    return cadena.length;
}

console.log("1). ",contarCaracteres("Hola Mundo"));

//2) Funcion que te devuelva el texto recortado seguen el numero de caracteres indicados
const recortarTexto = (cadena, numCaracteres) => {
    return cadena.substring(0, numCaracteres);
}

console.log("2). ",recortarTexto("Hola Mundo", 4));

//3) Funcion que dada una String te devuelva un Array de textos separados por cierto caracter
const convertirArray = (cadena, separador) => {
    return cadena.split(separador);
}

console.log("3). ",convertirArray("hola que tal", " "));

//4) Funcion que calcule el precio de un producto aplicando un descuento
const calcularPrecio = (precio, descuento) => {
    return precio - (precio * descuento / 100);
}

console.log("4). ",calcularPrecio(100, 20));

//5) Funcion  que calcule la edad de una persona mandandole como parametro año mes y dia
const calcularEdad = (anio, mes, dia) => {
    let fechaNacimiento = new Date(anio, mes, dia);
    return new Date().getFullYear() - fechaNacimiento.getFullYear();
}


console.log("5). ",calcularEdad(1988,9,1));

//6) Funcion que convierta decimal a numeros romanos hasta el numero 1000
const convertirDecimalARomano = (numero) => { 
    let romanos = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let resultado = "";
    for(let i = 0; i < decimal.length; i++){
        while(decimal[i] <= numero){
            resultado += romanos[i];
            numero -= decimal[i];
        }
    }
    return resultado;
}

console.log("6). ",convertirDecimalARomano(15));

//7) Funcion que convierte decimal a binario
const convertirDecimalABinario = (numero) => {
    let binario = "";
    while(numero > 0){
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    return binario;
}

console.log("7). ",convertirDecimalABinario(1000));

//8) Funcion que devuelva el numero de vocales de una cadena de texto
const contarVocales = (cadena) => {
    let vocales = "aeiou";
    let contador = 0;
    for(let i = 0; i < cadena.length; i++){
        if(vocales.indexOf(cadena.charAt(i)) !== -1){
            contador++;
        }
    }
    return contador;
}

console.log("8). ",contarVocales("Hola Mundo"));

// 9) Funcion que valide si una palabra es palindromo o no 
const esPalindromo = (cadena) => {
    cadena = cadena.toLowerCase();
    let cadenaInvertida = cadena.split("").reverse().join("");
    if(cadenaInvertida === cadena){
        return true;
    }else{
        return false;
    }
}

console.log("9). ",esPalindromo("Salas"));

// 10) Funcion que elimine los espacios de una cadena de texto
const eliminarEspacios = (cadena) => {
    return cadena.replace(/\s/g, "");
}

console.log("10). ",eliminarEspacios("Hola Mundo"));

// 11) Funcion que tome la primera letra de cada palabra y lo devuelva en mayuscula
const capitalizarPalabras = (cadena) => {
    let palabras = cadena.split(" ");
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i].charAt(0).toUpperCase();
    }
    return palabras.join(" ");
}

console.log("11). ",capitalizarPalabras("Yoni Escobar"));

// 12) Funcion que devuelva la cantidad de palabras de una cadena de texto
const contarPalabras = (cadena) => {
    return cadena.split(" ").length;
}

console.log("12). ",contarPalabras("Hola Mundo"));

// 13) Funcion que devuelva el texto con la primera letra de cada palabra en mayuscula
const capitalizarTexto = (cadena) => {
    let palabras = cadena.split(" ");
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1);
    }
    return palabras.join(" ");
}

console.log("13). ",capitalizarTexto("hola mundo"));

// 14) Funcion que devuelva la cadena de texto invertida
const invertirTexto = (cadena) => {
    return cadena.split("").reverse().join("");
}

console.log("14). ",invertirTexto("Hola Mundo"));


// 15) Funcion que pase un arreglo de numeros y vuevuelva la suma de todos los numeros
const sumarNumeros = (numeros) => {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}

console.log("15). ",sumarNumeros([10,20,30,40,50]));

// 16) Funcion que pase un arreglo de edades y devuelva la mayor y la menor
const calcularMayorMenor = (edades) => {
    let mayor = edades[0];
    let menor = edades[0];
    for(let i = 0; i < edades.length; i++){
        if(edades[i] > mayor){
            mayor = edades[i];
        }
        if(edades[i] < menor){
            menor = edades[i];
        }
    }
    console.log(`16). La mayor es ${mayor} y la menor ${menor}`);
}

calcularMayorMenor([10,20,30,40,50]);

// 17) Funcion de escala de notas de 0 a 10. Ejemplo 0-5 Pesimo, 6-7 Regular, 8-9 bueno , 10 excelente
const escalaNotas = (nota) => {
    if(nota >= 0 && nota <= 5){
        return "Pesimo";
    }else if(nota >= 6 && nota <= 7){
        return "Regular";
    }else if(nota >= 8 && nota <= 9){
        return "Bueno";
    }else if(nota === 10){
        return "Excelente";
    }else{
        return "Nota no valida";
    }
}

console.log("17). ",escalaNotas(8));

// 18) Funcion que devuelva el numero de cifras de un numero entero
const contarCifras = (numero) => {
    return numero.toString().length;
}

console.log("18). ",contarCifras(1234));

// 19) Funcion que muestre los numeros primos de 1 a 1000
console.log("19). ");
const mostrarPrimos = () => {
    for(let i = 1; i <= 1000; i++){
        let contador = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                contador++;
            }
        }
        if(contador === 2){
            console.log(i);
        }
    }
}

console.log(mostrarPrimos());

// 20) Funcion que realice el juego de piedra, papel o tijera Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".
const juegoPiedraPapelTijera = (jugador1, jugador2) => {
    if(jugador1 === jugador2){
        return "Empate";
    }else if(jugador1 === "piedra" && jugador2 === "tijera"){
        return "Piedra > Tijera";
    }else if(jugador1 === "papel" && jugador2 === "piedra"){
        return "Papel > Piedra";
    }else if(jugador1 === "tijera" && jugador2 === "papel"){
        return "Tijera > Papel";
    }
}

console.log("20). ",juegoPiedraPapelTijera("papel","piedra"));

// 21) Funcion que realice un temporizador que muestre un mensaje cada cierto tiempo
const temporizador = (mensaje, tiempo) => {
    setInterval(() => {
        console.log(mensaje);
    }, tiempo);
} 

console.log(temporizador("Hola Mundo", 3000));