
import { validarAcceso } from "../modules/validaracceso.js"


    let edad = Number(prompt("Ingrese la edad: "))

    let contraseña = prompt("Ingrese la contraseña: ")

    if (validarAcceso(edad,contraseña))
    {
        alert ("Acceso permitido")
    }
    else{
        alert("Acceso denegado")
    }


