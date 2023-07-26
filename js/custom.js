// instancia jquery e evita conflitos
// jQuery(function ($)
$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
})

/* let titulos = $(' h4') // tag

let itens = $('.featured-item') // class vem com ponto antes

let destaques = $('#featured') // id com a hashtag

console.log(titulos.first());
*/

// Configuração de Produtos

// $('.featured-item a').addClass('btn btn-dark stretch-link');

// $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');
// $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>');
// $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>');

// $('.featured-item:first h4').addClass('active')
// $('.featured-item:first h4').removeClass('active')
// $('.featured-item:first h4').toggleClass('active')
// $('.featured-item:first h4').hide() esconde elemento
// $('.featured-item:first h4').show() mostra elemento
// $('.featured-item:first h4').fadeIn(2000 - tempo de transição) cria transição
// $('.featured-item:first h4').fadeOut() cria transição


// $('.featured-item:first h4').css('color', '#ff0000')  altera cor

/*
* Manipulação de eventos
*/

$('.alert').on('click', function (event) {
    event.preventDefault();

    alert('Produto Esgotado');
})

/* Callback
* Entendendo ações que começam ao termino de outra
*/
$('.featured-item:nth(1)')
    .hide(2000, function () {
        // este é o callback
        console.log($(this).find('h4').text() + ' esgotado')
    })
    .show(2000, function () {
        console.log($(this).find('h4').text() + ' em esgotado')
    })


/*
* Animações
*/
const duracao = 1000 // equivalente a 1 segundo

$('.featured-item:nth(0)')
    .hide(duracao)
    .show(duracao)
    .fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao)

$('#form-submit').on('click', function (e) {

    e.preventDefault()

    if ($('#email').val() != '') {
        $('#email').animate({
            opacity: "toggle",
            top: "-50"
        }, duracao, function () {
            console.log($(this).val())
        })
    }

});

/*
* Ouvinte de eventos .nav-modal-open
*/
$('.nav-modal-open').on('click', function (e) {

    e.preventDefault();

    let elem = $(this).attr('rel')

    $('.modal-body').html($('#' + elem).html())

    $('.modal-header h5.modal-title').html($(this).text())

    let myModal = new bootstrap.Modal($('#modelId'))

    myModal.show()


})

