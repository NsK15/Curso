
# Operadores

## ARitméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicação
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false)
<   menor que
>   maior que
<=  menor ou igual
>=  maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true / false)
==      igualdade entre sentenças (valor)
!=      diferença entre sentenças (valor)
===     igualdade entre sentenças (valor e tipo)
!==     diferença entre sentenças (valor e tipo)

## Operedores de lógica e junção lógica
!       NÃO (NOT)
&&      E (AND)
||      OU (OR)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:

a != b      // o valor de a é diferente de b
x !== y     // o valor e o tipo de x são diferentes de y
!a == b     // o valor de a não é igual ao valor de b


#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";


## IF
if (...) {

}

## Else
else {

}

* Exemplo
if (cor == "preto") {
    meuCarro = "preto";
} else {
    meuCarro = "cinza";
}

## Else if
else if {
    
}

* Exemplo
if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul";
}

## Switch

switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default :
        console.log('não temos a cor desejada');
}


## media
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota 4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if(media >= 8 ) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}


## Laços de Repetição


for ([expressaoInicial]; [condicao]; [incremento])

while ( [condicao] ){
    [execucao]
}

var contador = 0;
while(1 < 10) {
    contador++
}

var hora = 24;
while (hora > 0) {
    
    console.log(hora);
    hora--;
}


do {
    [execução]
} while ([condição])


```


// Fazer a revisão do carro aos 10 km

var km;
var revisao = 3;
for(km = 0; km < revisao; km++ ){
    console.log("apenas " + km + "kms pode rodar");
}

```

### Cálculo da Média de Alunos


var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1)); - ParseInt = Soma de inteiros -
    console.log("Notas: " + notasAluno);

    for ( c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c]
    }

    media = nota / 4;

    if(media >= 7){
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Média: " + media + " - " + resultado);

}


### Funções

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calculoMedia( notas ) {
    
    var soma = 0;
    for ( c = 0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length

    return media;
}

let media; // escopo global

function aprovacao( notas ){
    
    let media = calculoMedia( notas ); // escopo da função

    let condicao = media >= 7 ? "Aprovado" : "Reprovado";
    
    return "Média: " + media + " - Resultado: " + condicao;

}





// console.log("Média = " + calculoMedia([8,8]))
console.log( aprovacao( [8,8]) );