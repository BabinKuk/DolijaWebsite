// Contact form
$(function() {
	var form_status = $('<div class="form_status"></div>');
	form_status.html('');
	
	// submit contact form event
	var contact_form = $('#contact-form');

	//get the value of clicked button
	var submit_btn;

	contact_form.submit(function() {
		event.preventDefault();

		// get submit btn value (language) and set result messages
		submit_btn = $('#msg-submit').val();
		//console.log('submit_btn ' + submit_btn);

		var successMsg= '';
		var errMsg = '';
		var doneMsg = '';
		var sendMsg = '';
		
		switch(submit_btn) {
			case 'Send':
				sendMsg = 'Sending e-mail...';
				successMsg = 'Thank you for contacting us. We will contact you as early as possible.';
				errMsg = 'Sorry, it seems that our mail server is not responding. Please try again later!';
				doneMsg = successMsg;
				break;
			case 'Invia':
				sendMsg = 'Inviando e-mail...'
				successMsg = 'Grazie per averci contattato. Ti contatteremo il prima possibile.';
				errMsg = 'Siamo spiacenti, sembra che il nostro mail server non stia rispondendo. Per favore riprova più tardi!';
				doneMsg = successMsg;
				break;
			default:
				sendMsg = 'Slanje e-maila...';
				successMsg = 'Hvala što ste nas kontaktirali. Javit ćemo vas što je prije moguće.';
				errMsg = 'Nažalost, čini se da naš mail server trenutno ne reagira. Molimo pokušajte ponovo kasnije.';
				doneMsg = successMsg;
		}

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
				contact_form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> ' + sendMsg+ '</p>').fadeIn() );
			},
			success: function() {
				// Enable button & show success message
				$("#msg-submit").attr("disabled", false);
				contact_form.prepend( form_status.html('<p class="text-success">' + successMsg + '</p>') );
			
				//clear all fields
				$('#contact-form').trigger("reset");
			},
			error: function() {
				// Fail message
				contact_form.prepend( form_status.html('<p class="alert alert-danger"><strong>' + errMsg + '</p>') );
				
				//clear all fields
				$('#contact-form').trigger("reset");
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + doneMsg + '</p>').delay(3000).fadeOut();
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

	//get the value of clicked button
	var subscribe_btn;
	
	// ne koristi se, submit ide preko mailchimp servisa
	subscribe_form.submit(function() {
		event.preventDefault();

		//console.log('sumbitNewslettertSubscription');
		
		// get subscribe btn value (language) and set result messages
		subscribe_btn = $('#subscribe-btn').val();
		//console.log('subscribe_btn ' + subscribe_btn);

		var successMsg= '';
		var errMsg = '';
		var doneMsg = '';
		
		switch(subscribe_btn) {
			case 'Send':
				successMsg = 'Thank you for subscribing to our newsletter.';
				errMsg = 'Sorry, it seems that our server is not responding. Please try again later!';
				doneMsg = successMsg;
				break;
			case 'Invia':
				successMsg = 'Grazie per esserti iscritto alla nostra newsletter.';
				errMsg = 'Siamo spiacenti, sembra che il nostro server non stia rispondendo. Per favore riprova più tardi!';
				doneMsg = successMsg;
				break;
			default:
				successMsg = 'Hvala što ste se prijavili na naš newsletter.';
				errMsg = 'Nažalost, čini se da naš server trenutno ne reagira. Molimo pokušajte ponovo kasnije.';
				doneMsg = successMsg;
		}
	 
		// get values from FORM
	 	var email = $("#subscribe-email").val();
	 	var name = $("#subscribe-email").val();
	 	var subject = 'Website Newsletter';
	 	var message = 'Website Newsletter';
		
	 	//console.log('1: ' + email, '2: ' + name,'3: ' + subject,'4: ' + message);
	
		//console.log($(this).attr('action'));
		
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
				//contact_form.append( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			},
			success: function() {
				// Enable button & show success message
				$("#subscribe-btn").attr("disabled", false);
				subscribe_form.append( form_status.html('<p class="text-success subscribe-submit-msg">' + successMsg + '</p>').delay(3000).fadeOut());
			
				//clear all fields
				$('#subscribe-form').trigger("reset");

				// reload page
				//setTimeout(function() {
				//	window.location.reload();
				//}, 3000);
			},
			error: function() {
				// Fail message
				subscribe_form.append( form_status.html('<p class="alert alert-danger subscribe-submit-msg"><strong>' + errMsg + '</p>').delay(3000).fadeOut());
				
				//clear all fields
				$('#subscribe-form').trigger("reset");

				// reload page
				//setTimeout(function() {
				//	window.location.reload();
				//}, 3000);
			}
		}).done(function(data){
			form_status.html('<p class="text-success subscribe-submit-msg">' + doneMsg + '</p>').delay(3000).fadeOut();
		});
	});

});
