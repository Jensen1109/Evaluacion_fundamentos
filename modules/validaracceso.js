
export const validarAcceso = function(edad, contraseña){
    // Variable para almacenar el estado de acceso
    let acceso = false;
    
    // Verificar que la edad sea mayor a 18 y la contraseña este correcta
    if(edad > 18 && contraseña === "h123"){
        // Conceder acceso si ambas condiciones se cumplen
        return acceso = true;
    } else {
        // Denegar acceso si alguna condición no se cumple
        return acceso;
    }
}