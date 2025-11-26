export function CalcularImpuestoUnitario(valor,porcentaje)
{
    // declaramos una variable llamada operacion
    // donde hacemos una multipliacion y se divide en 100
    let operacion= (valor*porcentaje)/100

    //retornamos la operacion
    return operacion
}