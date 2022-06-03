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

document.write(`<i>Una empresa de llamadas telefonicas, necesita un programa que calcule el costo por llamada. Tener en cuenta lo siguiente:<br>
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
const oEntel = 1.00;

minutos = parseFloat(prompt('Tiempo de llamada: '));
operador = prompt('Digite su Operador: \n1.- Fijo \n2.- Claro \n3.- Movistar \n4.- Entel');

let cFijo = minutos * oFijo;
let cClaro = minutos * oClaro;
let cMovistar = minutos * oMovistar;
let cEntel = minutos * oEntel;

if(operador==1){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Fijo</b> la suma de:<br><br> <center>Total a pagar: S/. ${cFijo} <br>`)}

else if(operador==2){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Claro</b> la suma de:<br><br> <center>Total a pagar: S/. ${cClaro} <br>`)}

else if(operador==3){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Movistar</b> la suma de:<br><br> <center>Total a pagar: S/. ${cMovistar} <br>`)}

else if(operador==4){
document.write(`- Duración de llamada ${minutos} minutos <br><br>- Debera cancelar a su operador <b>Entel</b> la suma de:<br><br> <center>Total a pagar: S/. ${cEntel} <br>`)
}
else{
    alert("Operador fuera de servicio")
}