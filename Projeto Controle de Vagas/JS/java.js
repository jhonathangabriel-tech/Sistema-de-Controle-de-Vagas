const totalVagas = 20;

let vagasDisponiveis = 20;

let veiculos = [];

const contador = document.getElementById("contador");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-veiculos");

function atualizarContador() {
    contador.textContent = vagasDisponiveis;
}


formulario.onsubmit = function(event) {

    event.preventDefault();

    let placa = document.getElementById("placa").value;
    let tipo = document.getElementById("tipo").value;
    let proprietario = document.getElementById("proprietario").value;

    
    
    if (vagasDisponiveis > 0) {


        veiculos.push({
            placa: placa,
            tipo: tipo,
            proprietario: proprietario
        });

        
        lista.innerHTML +=
            "<p>Placa: " + placa +
            " | Tipo: " + tipo +
            " | Proprietário: " + proprietario +
            "</p>";


        vagasDisponiveis--;

        
        atualizarContador();

        
        formulario.reset();

        alert("Veículo cadastrado com sucesso!");

    } 
    
    
    else {

        alert("Estacionamento lotado!");

    }
}

