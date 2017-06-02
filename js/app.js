$(document).foundation()

function navTo(elem) {
	const panel = $(elem).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
}
