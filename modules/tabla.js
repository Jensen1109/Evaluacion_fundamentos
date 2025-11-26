export const multiplicacion =(n)=>
{
    // declaramos una variable llamada operacion donde le estamos asignando que va a hacer un arreglo
    let operacion =[]
    //bucle para multiplicar el numero
    for(let i = 1;i<=10;i++)
    {
        //con el nombre del array y el push lo que estamos haciendo es agregarla
        operacion.push(n*i)
    }
    //retornamos el arreglo
    return operacion
}