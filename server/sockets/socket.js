
const { io } = require('../server');


io.on('connection', (client) => {
	console.log('Usuario conectado');

	client.on('disconnect',() => {
		console.log('Usuario desconectado');
	});

	// Escuchar cliente
	client.on('enviarMensaje', (data, callback) => {

		console.log(data);

		client.broadcast.emit('enviarMensaje', data);
/*
		if(mensaje.usuario) {

			callback({
				resp:'Mensaje recibido, todo OK'
			});

		} else {

			callback({
				resp:'ERROR!'
			});

		}
*/
	});

	// Enviar mensaje al cliente
	
	client.emit('enviarMensaje', {
		usuario:'Administrador',
		mensaje:'YO MANDO'
	});
	
})