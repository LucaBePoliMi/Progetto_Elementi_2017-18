




// FUNZIONI PER HEADER
function button_am_indice_attivo() {
$(".aboutme").removeClass("scritteindice");$(".aboutme").addClass("scritteindice_attivo")
}

function button_port_indice_attivo() {
$(".portfolio").removeClass("scritteindice");$(".portfolio").addClass("scritteindice_attivo")
}

function button_cur_indice_attivo() {
$(".curriculum").removeClass("scritteindice");$(".curriculum").addClass("scritteindice_attivo")
}

function button_con_indice_attivo() {
$(".contatti").removeClass("scritteindice");$(".contatti").addClass("scritteindice_attivo")
}



function button_am_indice_disattivo() {
$(".aboutme").removeClass("scritteindice_attivo");$(".aboutme").addClass("scritteindice")
}

function button_port_indice_disattivo() {
$(".portfolio").removeClass("scritteindice_attivo");$(".portfolio").addClass("scritteindice")
}

function button_cur_indice_disattivo() {
$(".curriculum").removeClass("scritteindice_attivo");$(".curriculum").addClass("scritteindice")
}

function button_con_indice_disattivo() {
$(".contatti").removeClass("scritteindice_attivo");$(".contatti").addClass("scritteindice")
}



$(".buttonind_am").mouseover(button_am_indice_attivo)
$(".buttonind_port").mouseover(button_port_indice_attivo)
$(".buttonind_cur").mouseover(button_cur_indice_attivo)
$(".buttonind_con").mouseover(button_con_indice_attivo)



$(".buttonind_am").mouseout(button_am_indice_disattivo)
$(".buttonind_port").mouseout(button_port_indice_disattivo)
$(".buttonind_cur").mouseout(button_cur_indice_disattivo)
$(".buttonind_con").mouseout(button_con_indice_disattivo)


// FUNZIONI PER FOOTER
function attiva_footer() {
  $(".contenitore_footer").removeClass("footerdisattivo");
}

function toggle_footer() {
  if($(".contenitore_footer").hasClass("footerdisattivo")) {$(".contenitore_footer").addClass("footer_attivato");$(".contenitore_footer").removeClass("footerdisattivo");$(".footerbasso").addClass("fuorischermo");$(".footerbasso").removeClass("basso")}
else if($(".contenitore_footer").hasClass("footer_attivato")) {$(".contenitore_footer").addClass("footerdisattivo");$(".contenitore_footer").removeClass("footer_attivato");$(".footerbasso").addClass("basso");$(".footerbasso").removeClass("fuorischermo")}
}










$(".references").on("click", toggle_footer);






// Immagini rendono azzurro il link
function rendi_azzurro_link_uno() {
  $(".colore_azzurro_uno").addClass("link_azzurro");
}

function rendi_azzurro_link_due() {
  $(".colore_azzurro_due").addClass("link_azzurro");
}

function rendi_azzurro_link_tre() {
  $(".colore_azzurro_tre").addClass("link_azzurro");
}

function rendi_azzurro_link_cinque() {
  $(".colore_azzurro_cinque").addClass("link_azzurro");
}

function rendi_azzurro_link_sei() {
  $(".colore_azzurro_sei").addClass("link_azzurro");
}



function rimuovi_azzurro_link() {

  $(".testo_link").removeClass("link_azzurro");
}



function rendi_i_link_azzurri() {
if($(this).hasClass("img_azzurro_uno")) {rendi_azzurro_link_uno()}
else if($(this).hasClass("img_azzurro_due")) {rendi_azzurro_link_due()}
else if($(this).hasClass("img_azzurro_tre")) {rendi_azzurro_link_tre()}
else if($(this).hasClass("img_azzurro_cinque")) {rendi_azzurro_link_cinque()}
else if($(this).hasClass("img_azzurro_sei")) {rendi_azzurro_link_sei()}

}


$(".icona_link").mouseover(rendi_i_link_azzurri);

$(".icona_link").mouseout(rimuovi_azzurro_link);


// SLIDER

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
