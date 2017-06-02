$(document).foundation()

function navTo(elem) {
	const panel = $(elem).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
}

const $offCanvas = $('#offCanvas')
/* Cuando se seleccione una opcion de navegacion en el menu off-canvas, 
    cierra el menu automaticamente */
$offCanvas.find('li').click(ev => {

  $offCanvas.foundation('close')
})