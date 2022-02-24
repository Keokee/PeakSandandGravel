jQuery(document).ready(function() {
  'use strict';
	jQuery('#submit').click(function() {
		var name = jQuery('.name').val();
		var email = jQuery('.email').val();
		var phone = jQuery('.phone').val();
		var message = jQuery('.message').val();
		jQuery("#contact-form").empty();
				if (name === '' || email === '' || phone === '') {
				alert("Please Fill Required Fields");
				} else {
				jQuery.post("send.php", {
					name: name,
					email: email,
					phone: phone,
					message: message
			});
		jQuery('#contact-form')[0].reset();
		}
	});
});