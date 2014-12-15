// Click on conroller1, switch underlines and show correct div
$('#intro_button').click( function() {
	$('#introduction_text_div').show()

	$('#visualiation_div').hide()
	$('#tweet_viewer').hide()
	
	$('#intro_button').css('text-decoration', 'underline')
	$('#visualisation_button').css('text-decoration', 'none')
})

$('#visualisation_button').click( function() {
	$('#introduction_text_div').hide()
	
	$('#visualiation_div').show()
	$('#tweet_viewer').show()
	
	$('#intro_button').css('text-decoration', 'none')
	$('#visualisation_button').css('text-decoration', 'underline')
})

// Click on controller2, switch underlines
$('.controller2').click( function() {
	// remove underlines
	$('.controller2').css('text-decoration', 'none')
	$(this).css('text-decoration', 'underline')
})