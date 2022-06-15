
let pregunta = prompt("Que desea calcular? -1. Triangulo. -2. Rectangulo -3. Circulo");
let res = parseInt(pregunta);

switch (res) {
  case 1:
    let b_tri = prompt("Ingrese valor de la altura");
    let h_tri = prompt("Ingrese el valor de la base");
    let triangulo = b_tri * h_tri / 2;
    console.log(`El area del triangulo es de ${triangulo} cm²`);
    break;
  case 2:
    let b_rec = prompt("Ingrese valor de la altura");
    let h_rec = prompt("Ingrese el valor de la base");
    let rectangulo = b_rec * h_rec;
    console.log(`El area del rectangulo es de ${rectangulo} cm²`);
    break;
  case 3:
    let pi = 3.14;
    let r = parseInt(prompt("Ingrese el valor del radio"));
    let circulo = pi * (r * r);
    console.log(`El area del circulo es de ${circulo} cm²`);
    break;
  default:
    console.log("nada");
    break;
}


// Ejercicio 2

let numero = prompt("Ingrese un numero que quiera multiplicar");

for(let i = 0; i <= 10; i++){
  res = numero * i;
  console.log(`${numero} * ${i} = ${res}`);
}

// Ejercicio 3

let palabra = prompt("Ingrese una palabra para separarla");
for(let i = 0; i < palabra.length; i++){
  console.log(`${palabra[i]}`);
}