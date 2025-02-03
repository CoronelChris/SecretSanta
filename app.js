let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto; // Corregido
    }
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (!amigo) {
        alert("Escriba un nombre válido.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(amigo);
    console.log(amigos);

    document.getElementById('amigo').value = ""; // Limpiar input
    actualizarListaAmigos(); // Mostrar nombres en la lista

    if (amigos.length >= 2) {
        document.getElementById('sortear').disabled = false; // Habilita botón si hay 2+ amigos
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista para sortear.");
        return;
    }

    let amigoFinal = getRandomInt(amigos.length);
    let amigoSecreto = amigos[amigoFinal]; 

    asignarTextoElemento("#resultado", `Tu amigo secreto es: ${amigoSecreto}`);
}
