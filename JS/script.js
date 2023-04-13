function calculoMedia(notas) {

    var soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length

    return media;
}

let media; // escopo global

function aprovacao(notas) {

    let media = calculoMedia(notas); // escopo da função

    let condicao = media >= 7 ? "Aprovado" : "Reprovado";

    return "Média: " + media + " - Resultado: " + condicao;

}

// Funçãos Recursivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

// contagemRegressiva(50);

document.addEventListener('submit', function (evento) {

    evento.preventDefault();
    evento.stopImmediatePropagation();

    let formulario = document.getElementById('formulario-01')

    let dados = new FormData(formulario)

    let objeto = {};

    let notas = [];

    for (let key of dados.keys()) {
        objeto[key] = dados.get(key);


        // adicionar itens no array
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = texto;


});