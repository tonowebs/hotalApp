var server = {
	path: null,
	regSend: function(nom, tel, mail, foto){
		server.path = foto;
		$.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { nom: nom, mail: mail, tel: tel }
		}).done(server.regDone);
	},
	regDone: function(msg){
		if(msg == 1){
			fileTransfer.sendPhoto(server.path);
		}else
			navigator.notification.alert("Hubo un error al enviar los datos", null, "Error al enviar datos", "Aceptar");
	}
};