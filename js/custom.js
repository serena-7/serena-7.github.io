
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

$("#send").click(function() {
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();
	if (name == '' || email == '' || message == '') {
		alert('Please fill in all fields!')
	} else {
		print('Got Here')
		$.post("contact_form.php", {
			name1: name,
			email1: email,
			message1: message
		}, function(data){
			alert(data)
			if (data == "Your request has been received, Serena will get back to you soon.") {
				$("#contact-form")[0].reset()
			}
		})
	}
})