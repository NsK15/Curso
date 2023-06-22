# Bootstrap
- Framework ou biblioteca desenvolvimento
- Modular
- Componentes ricos
- CSS + JS
- Grid System
- Responsivo
- Mobile-firts
- Amplamente utilizda
- Cross browser

## Biblioteca x Frameword
- Biblioteca: oferece objetos / classes prontas para uso
- Framework: oferece um conjunto de bibliotecas
- Biblioteca: recurso para trabalhar
- Framework: metodologia de trabalho
- Biblioteca: te leva ao destino
- Framework: te ensina a chegar

## Desenvolvimento ágil
- Metodologias: Scrum, Kanban, XP
- Entrega de valor para o negócio
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - Mínimo Produto Viável
- Estar envolvido x comprometido

## Vantagens
- Uso simples
- Menos código
- Abstração de estilos
- Documentação completa: https://getbootstrap.com/

## Desvantagens
- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap
```
    <a class="btn btn-lg">Botão</a>
```

### Sem Bootstrap
```
    <a class="botao botao-grande">Botão</a>

    <style>
    html {
        font-size: 62.5%
    }

    .botao {
        background-color: #ccc;
        border-radius: 2px;
        display: block;
        font-family: sans-serif;
        font-size: 1.6rem;
        padding: 1rem 2 rem;
        margin: 5px auto;
        . . .
    }

    .botao.grande {
        font-size: 2rem;
    }

    .botao:hover { . . . }
    .botao:active { . . . }
    .botao:visited { . . . }

    </style>

```

## Componentes
- Blocos / Modelos / Templates reutilizáveis


## Helpers
- Funções básicas
- Incrementos
- Ajustes