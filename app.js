
import { promedio } from "./js/app1";
import { validacion } from "./js/app2";

const continuar = true;
while(continuar)
{
    let option = parseInt(prompt(`Digite la opcion que desea realizar:
        1. Ejer 1
        2. Ejer 2
        3. Ejer 3
        4 Ejer 4
        0. salir`));

    switch(option)  
    {
        case 1:
            promedio()
            break;
        case 2:
            validacion()
            break;
        case 3:
            break;
        case 4:
            break;
            
        case 5:
            break;

        case 0:
            alert("Gracias")
            continuar = false;
            break

        default:
            alert("Opcion no valida")
    }
}