var x = 3.333335;
if (Number.isInteger(x)) {
    console.log("É inteiro");
} else {
    console.log("É float");
}

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

branco == "branco"; false
branco == cinza; false
var carro = carro == "preto" ? "cinza" : "marron"; cinza

branco + preto + cinza; "pretocinzabranco" //16 caracteres



function calcularParcelas(valorPrestacao, entrada, valor) {

    return (valor - entrada) / valorPrestacao

}

console.log(calcularParcelas(750, 3000, 30000))