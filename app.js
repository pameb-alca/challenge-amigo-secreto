/*
    Autor: Pamela Beatriz Alvarez Cano
    Challenge Amigo Secreto
    23 de septiembre de 2025
    Descripción: Este script maneja la lógica para agregar nombres,
               validar entradas y realizar un sorteo aleatorio de un amigo secreto.
*/


let nombres = []; // Arreglo para almacenar los nombres de los amigos.

// Función para agregar nombres a la lista.

function agregarAmigo() {
    // Obtiene el valor del campo de texto y lo limpia.
    let nombre = document.getElementById('amigo').value.trim();
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    // Valida si el campo de texto está vacío.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agrega el nombre al arreglo.
    nombres.push(nombre);

    // Muestra la lista de amigos.
    let itemLista = document.createElement('li');
    itemLista.textContent = nombre;
    lista.appendChild(itemLista);

    // Limpia el campo de texto.
    document.getElementById('amigo').value = '';

    // Borra el resultado del sorteo anterior.
    resultado.innerHTML = '';
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const lista = document.getElementById('listaAmigos'); // Se obtiene la lista de amigos.

    // Valida que haya al menos dos nombres para sortear.
    if (nombres.length < 2) {
        alert('Agrega al menos dos nombres para realizar un sorteo.');
        return;
    }

    // Oculta la lista de amigos.
    lista.style.display = 'none';

    // Genera un índice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];

    // Muestra el nombre sorteado en el área de resultados, reemplazando cualquier contenido anterior.
    resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: **${nombreSorteado}**! 🎉</li>`;
}