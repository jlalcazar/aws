/*jshint -W117 */

/*
var http = require('http');
var server = http.createServer();

function control(petic, resp) {
	resp.writeHead(200, {
		'content-type': 'text/plain'
	});
	resp.write('Hola, Mundo!');
	resp.end();
}
server.on('request', control);
server.listen(80);
*/


//Servidor.js
function inicializar() {
	var server = require('http').createServer();

	function control(petic, resp) {
		console.log('Petición recibida'); //Texto que saldrá por consola
		resp.writeHead(200, {
			'content-type': 'text/plain'
		});
		resp.write('Peticion recibida en el servidor.');
		resp.end();
	}
	server.on('request', control).listen(80);
	console.log('Servidor inicializado');
}
exports.inicializar = inicializar; //Exportamos la función
