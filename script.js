let numero = 0
function atualizarcontador(){
    document.getElementById ('contador').innerText=numero;

}


function aumentar(){
    numero = numero +1
    atualizarcontador()
}

function diminuir(){
    numero = numero -1
    atualizarcontador();
}

