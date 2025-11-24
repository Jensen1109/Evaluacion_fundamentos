
import { validarAcceso } from "../modules/validaracceso"

export function validacion()
{
    edad = Number(prompt("Ingrese la edad: "))

    contraseña = prompt("Ingrese la contraseña: ")

    if (validarAcceso(edad,contraseña))
    {
        alert ("Acceso permitido")
    }
    else{
        alert("Acceso denegado")
    }

}


