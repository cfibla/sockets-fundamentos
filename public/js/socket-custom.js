var socket = io();

//socket.on -> ESCUCHA SUCESOS (conexión - desconexión)
socket.on('connect', function() {
	console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
	console.log('SERVIDOR DESCONECTADO!');
});

//socket.on -> ESCUCHA SUCESOS DEL SERVIDOR
socket.on('enviarMensaje', (mensaje) => {
	console.log('Mensaje desde el servidor:', mensaje)
});

// socket.emit -> EMITE INFORMACIÓN AL SERVIDOR
socket.emit ('enviarMensaje', {
	usuario: 'Carlos Fibla',
	mensaje: 'Hola, qué tal?'
}, function( resp ) {
	console.log('Respuesta SERVER: ', resp);
});