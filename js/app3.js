import { multiplicacion } from "../modules/tabla.js"

 // Solicitar la el numero al usuario
let n = Number(prompt("Ingrese el numero: "))

// declaramos una variable donde se le asigna la constante de tabla con parametro (n)
let resultado=multiplicacion(n)

//mostramos el resultado
alert(`El resultado de la multiplicacion del numero es : ${resultado}`)