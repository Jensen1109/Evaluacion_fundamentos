import { multiplicacion } from "../modules/tabla.js"

let n = Number(prompt("Ingrese el numero: "))

let resultado=multiplicacion(n)

alert(`El resultado de la multiplicacion del numero es : ${resultado}`)