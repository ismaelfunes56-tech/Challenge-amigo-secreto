// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja () {
    document.querySelector ("#amigo"). value = "";
}

function agregarAmigo () {
    let nombre = document.getElementById("amigo").value.trim ()
    if (nombre === "") {
        alert ("Por favor inserte un nombre");
        return;
    }
    amigos.push (nombre);
    limpiarCaja ();
    mostrarLista ();
}

function mostrarLista () {
    let lista = document.getElementById ("listaAmigos");
    
}