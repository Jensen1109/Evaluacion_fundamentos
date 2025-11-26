import { calcularPromedio } from "../modules/promedio.js";

    // Solicitar la cantidad de notas y almacenarlas en un arreglo
    let cantidadNota = Number(prompt("Ingrese la cantidad de notas que desea evaluar:"));

    // Crear un arreglo para almacenar las notas
    let notas = [];

    // Bucle para ingresar cada nota
    for (let i = 0; i < cantidadNota; i++) {

        // se solicita  la nota y se agrega  al arreglo
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));

        // se agrega la nota al arreglo
        notas.push(nota);
    }
    
    // Calcular el promedio y el rendimiento 
    alert(`El promedio de las notas es: ${calcularPromedio(notas).promedio.toFixed(1)} \nEl rendimiento es: ${calcularPromedio(notas).rendimiento}`);