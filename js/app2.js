
import { validarAcceso } from "../modules/validaracceso.js"

 // Solicitar la edad al usuario
    let edad = Number(prompt("Ingrese la edad: "))
// Solicitar la contraseña al usuario
    let contraseña = prompt("Ingrese la contraseña: ")

// estamos creando una condicion donde si la edad y contraseña son correctas 
// va a mostrarse accesp permitido de lo contrario acceso denegado
    if (validarAcceso(edad,contraseña))
    {
        alert ("Acceso permitido")
    }
    else{
        alert("Acceso denegado")
    }


