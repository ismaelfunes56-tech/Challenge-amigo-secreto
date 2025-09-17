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
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement ("li");
        item.textContent = amigos [i];
        lista.appendChild (item);
    }
}

function sortearAmigo () {
    if (amigos.lenght === 0) {
        alert ("La lista está vacía. Por favor agregar al menos un nombre");
        return;
    }

    let indiceAleatorio = Math.floor (Math.random () * amigos.length);
    let amigoSorteado = amigos [indiceAleatorio];

    asignarTextoElemento ("#resultado",`El amigo secreto es: ${amigoSorteado} `);

}

function condicionesIniciales () {
    asignarTextoElemento (".section-title", "Escriba el nombre de sus amigos");
    amigos = [];
    asignarTextoElemento ("#resultado", "");

}

condicionesIniciales ();