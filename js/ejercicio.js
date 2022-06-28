//Ejercicio.

/* Ejercicio: Una empresa desea un sistema web, que procese la compra de 5 productos diversos. Para ello se ingresa el nombre y el apellido de un cliente, por separado, asi como los precios de dichos productos. El programa debe mostrar en pantalla, el nombre completo del cliente asi como el pago total y el IGV (18%) de dicha compra. 

let nombre = (prompt("Digite su Nombre"));
let apellido = (prompt("Digite su Apellido"));

let electro1 = parseInt(prompt("Ingrese precio de Television"))
let electro2 = parseInt(prompt("Ingrese precio de Cocina"))
let electro3 = parseInt(prompt("Ingrese precio de Microonda"))
let electro4 = parseInt(prompt("Ingrese precio de Refrigeradora"))
let electro5 = parseInt(prompt("Ingrese precio de Congeladora"))

subtotal = electro1 + electro2 + electro3 + electro4 + electro5;
igv = subtotal *0.18+(subtotal);

document.write("<h2>"+"Mayorista: "+nombre+" "+apellido+"<br>");
document.write("Productos añadido a su orden: "+"<br>"+"<br>"+"Television: S/"+electro1+"<br>"+"Cocina: S/"+electro2+"<br>"+"Microonda: S/"+electro3+"<br>"+"Refrigeradora: S/"+electro4+"<br>"+"Congeladora: S/"+electro5+"<br>"+"<br>"+"<br>"+"<hr>");

document.write("El subtotal es: "+"S/"+subtotal+"<br>");
document.write("El total con IGV es: "+"S/"+igv+"<br>");
document.write("<center>"+"Que tenga buen Día "+"<<<< VUELVA PRONTO >>>>")

//Se tiene un numero, saber si es posito
let num=-9;

if(num==0){
    alert("Es neutro");
}
else if(num>0){
    alert("Es positivo");
}
else{
    alert("Es negativo");
}*/
//Se ingresa 3 notas de un alumno, mostrar el promedio y si esta aprobado o desaprobado

/* let nota1;
let nota2;
let nota3;

nota1=parseInt(prompt("Ingrese primer numero: "));
nota2=parseInt(prompt("Ingrese segundo numero: "));
nota3=parseInt(prompt("Ingrese tercer numero: "));

let prom=(nota1+nota2+nota3)/3;

if(prom>=17 && prom<=20){
    document.write(`El promedio es ${prom} Tiene promedio Exelente`);
}
else if(prom>=13 && prom<=16){
    document.write(`El promedio es ${prom} y ud esta regular`);
}
else if(prom>13){
    document.write(`El promedio es ${prom} y ud esta Desaprobado`);
}else{
    document.write(`Ingreso datos incorrectos`)
} 
====================================================================================================================================*/

/* document.write(`<i>Una empresa de llamadas telefonicas, necesita un programa que calcule el costo por llamada. Tener en cuenta lo siguiente:<br>
<br>
A Fijo: 0.20 centimos por minuto<br>
A Claro: 0.40 centimos por minuto<br>
A Movistar: 0.60 centimos por minuto<br>
A Entel: 1 sol el minuto<br><hr><br>`)

let minutos;
let operador;

const oFijo = 0.20;
const oClaro = 0.40;
const oMovistar = 0.60;
const oBitel = 0.80;
const oEntel = 1.00;

minutos = parseFloat(prompt('Tiempo de llamada: '));
operador = prompt('Digite su Operador: \n1.- Fijo \n2.- Claro \n3.- Movistar \n4.- Bitel \n5.- Entel');

let cFijo = minutos * oFijo;
let cClaro = minutos * oClaro;
let cMovistar = minutos * oMovistar;
let cBitel = minutos * oBitel;
let cEntel = minutos * oEntel;

if(operador==1){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Fijo</b> la suma de:<br><br> <center>Total a pagar: S/. ${cFijo} <br>`)}

else if(operador==2){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Claro</b> la suma de:<br><br> <center>Total a pagar: S/. ${cClaro} <br>`)}

else if(operador==3){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Movistar</b> la suma de:<br><br> <center>Total a pagar: S/. ${cMovistar} <br>`)}

else if(operador==4){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Bitel</b> la suma de:<br><br> <center>Total a pagar: S/. ${cBitel} <br>`)}

else if(operador==5){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Entel</b> la suma de:<br><br> <center>Total a pagar: S/. ${cEntel} <br>`)}

else{
    alert("Operador fuera de servicio")
}====================================================================== */

//let num=1;
/* for(let i=1;i<=6;i++){
    document.write("<h" +i+">Hola Mundo</h" +i+">");
} */

/* for(let i=2;i<=20;i++){
    document.write(i+ "<hr>")
    if(i==15){
        //break;
        continue;
    }
}
for(let i=2;i<=20;i+=2){
    document.write(i+"<br>")
} */
/* let x=3;
while(x<=30){
    document.write(x+"<hr>")
    x+=3; //x=x+3
} */
/* let f=1;
let acum=0;
do{
    acum=acum+f;
    f++;
}while(f<=20);
document.write(acum); */

/* function hola(){
    alert("Bienvenido a las funciones"); //Funcion sin argumentos
}
hola("Bienvenido a las funciones");

//funciones con argumentos
function hello(nombre){
    alert("Bienvenido a las funciones "+nombre); //document.write
}
let nom=prompt("Ingresa tu nombre");
hello(nom); */

/* //funcion anonima
let multiplica = function(numero1,numero2){
    let n1=numero1;
    let n2=numero2;
    let multi=n1*n2;
    return multi;
}
document.write(multiplica(7,9));*/

//funcion normal
function limpiar(){
    document.getElementById("miCalculadora").reset();
}
function muestraFecha(){
    let fecha;
    fecha = new Date();
    let cadena = fecha.getDay()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
}
document.getElementById("fecha").innerHTML= muestraFecha();

function muestraHora(){
    let hora;
    hora = new Date();
    let cadena = hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    return cadena;
}
document.getElementById("hora").innerHTML= muestraHora();

function multiplica(numero1,numero2){
    let n1 = numero1;
    let n2 = numero2;
    let multi = n1*n2;
    return multi;
}
function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("resp").innerHTML= sum;
}

//Resta
function restar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let rest = num1 - num2;
    document.getElementById("resp").innerHTML= rest;
}

//Multiplicación
function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let mult = num1 * num2;
    document.getElementById("resp").innerHTML= mult;
}

//División
function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let div = num1 / num2;
    document.getElementById("resp").innerHTML= div;
}

//Potencia
function potencia(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let pot = num1 ** num2;
    parseFloat(document.getElementById("resp").innerHTML= pot);
}

//Residuo
function residuo(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resid = num1 % num2;
    document.getElementById("resp").innerHTML= resid;
}