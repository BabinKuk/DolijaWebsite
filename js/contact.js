// Contact form
$(function() {
	
	var form_status = $('<div class="form_status"></div>');
	form_status.html('');
	
	// submit contact form event
	var form = $('#contact-form');
	form.submit(function(event){
		event.preventDefault();
		
		// get values from FORM
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		
		//var form_status = $('<div class="form_status"></div>');
		form_status.html('');
		
		$.ajax({
			//url: $(this).attr('action'),
			url: "././mail/contact.php",
			type: "POST",
			data: {
				name: name,
				subject: subject,
				email: email,
				message: message
			},
			cache: false,
			beforeSend: function(){
				$("#msg-submit").attr("disabled", true);
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			},
			success: function() {
				// Enable button & show success message
				$("#msg-submit").attr("disabled", false);
				form.prepend( form_status.html('<p class="text-success">Thank you for contacting us. We will contact you as early as possible.</p>') );

				//clear all fields
				$('#contact-form').trigger("reset");
			},
			error: function() {
				// Fail message
				form.prepend( form_status.html('<p class="alert alert-danger"><strong>Sorry, it seems that our mail server is not responding. Please try again later!</p>') );
				
				//clear all fields
				$('#contact-form').trigger("reset");
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contacting us. We will contact you as early as possible.</p>').delay(3000).fadeOut();
		});
	});
	
	// close contact form event
	var close = $('#contact-modal-close');
	close.on('click',function(event){
		//console.log('closing contact modal...');
		form_status.html('');
		
		//clear all fields
		$('#contact-form').trigger("reset");
	});
});
