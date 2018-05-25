// Contact form
$(function() {
	var form_status = $('<div class="form_status"></div>');
	form_status.html('');
	
	// submit contact form event
	var contact_form = $('#contact-form');

	contact_form.submit(function() {
		event.preventDefault();

		// get values from FORM
		var email = $("#email").val();
		var name = $("#name").val();
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
				contact_form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			},
			success: function() {
				// Enable button & show success message
				$("#msg-submit").attr("disabled", false);
				contact_form.prepend( form_status.html('<p class="text-success">Thank you for contacting us. We will contact you as early as possible.</p>') );
			
				//clear all fields
				$('#contact-form').trigger("reset");
			},
			error: function() {
				// Fail message
				contact_form.prepend( form_status.html('<p class="alert alert-danger"><strong>Sorry, it seems that our mail server is not responding. Please try again later!</p>') );
				
				//clear all fields
				$('#contact-form').trigger("reset");
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contacting us. We will contact you as early as possible.</p>').delay(3000).fadeOut();
		});
	});
	
	// close contact form event
	var contact_modal_close = $('#contact-modal-close');
	contact_modal_close.on('click',function(event){
		//console.log('closing contact modal...');
		resetContactModal();
	});

	$('#contactModal').on('hide.bs.modal', function () {
		//console.log('closing contact modal...');
		resetContactModal();
	})

	function resetContactModal() {
		//console.log('reset contact modal');
		//var form_status = $('<div class="form_status"></div>');
		//form_status.html('');
		$('.form_status').html('');
	
		//clear all fields
		$('#contact-form').trigger('reset');
		// Enable submit button
		$('#msg-submit').attr('disabled', false);
	}

	// submit subscribe form event
	var subscribe_form = $('#subscribe-form');
	
	subscribe_form.submit(function() {
		event.preventDefault();

	 	//console.log('sumbitNewslettertSubscription');
	
		// get values from FORM
	 	var email = $("#subscribe-email").val();
	 	var name = '';
	 	var subject = 'Website Newsletter';
	 	var message = 'Website Newsletter';
		
	 	//console.log('1: ' + email, '2: ' + name,'3: ' + subject,'4: ' + message);
	
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
				$("#subscribe-btn").attr("disabled", true);
				contact_form.append( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			},
			success: function() {
				// Enable button & show success message
				$("#subscribe-btn").attr("disabled", false);
				subscribe_form.append( form_status.html('<p class="text-success subscribe-submit-msg">Thank you for contacting us. We will contact you as early as possible.</p>') );
			
				//clear all fields
				$('#subscribe-form').trigger("reset");
			},
			error: function() {
				// Fail message
				subscribe_form.append( form_status.html('<p class="alert alert-danger subscribe-submit-msg"><strong>Sorry, it seems that our mail server is not responding. Please try again later!</p>') );
				
				//clear all fields
				$('#subscribe-form').trigger("reset");
			}
		}).done(function(data){
			form_status.html('<p class="text-success subscribe-submit-msg">Thank you for contacting us. We will contact you as early as possible.</p>').delay(3000).fadeOut();
		});
	});

});
