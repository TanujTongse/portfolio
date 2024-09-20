function whatsapp() {
    var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var mobile= document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    var whatsappUrl = "https://wa.me/916264885353?text=" +
        "Name: " + encodeURIComponent(name) + "%0a" +
		"Email: " + encodeURIComponent(email) + "%0a" +
		"Mobile: "+ encodeURIComponent(mobile) + "%0a" +
        "Message: " + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank").focus();
}
