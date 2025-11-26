import { CalcularImpuestoUnitario } from "../modules/impuesto.js";

let cantidadproductos=Number(prompt("Ingrese la cantidad de productos"))

let impuesto = 0;

for(let i=0;i<cantidadproductos;i++)
{
    let valorproducto=parseFloat(prompt(`Ingrese el valor del producto ${i+1}: `))
    
    let porcentaje=parseFloat(prompt(`Ingrese el porcentaje del producto ${i+1}: ` ))

    impuesto += CalcularImpuestoUnitario(valorproducto,porcentaje)
}
alert(`Impuesto total acumulado: ${impuesto}`)