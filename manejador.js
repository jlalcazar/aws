/*jshint -W117 */
function index(resp) {
	console.log("index ejecutada.");
	resp.writeHead(200, {
		"Content-Type": "text/html"
	});
	resp.write("index ejecutada.");
	resp.end();
}

function funcion_2(resp) {
	console.log("Funcion 2 ejecutada.");
	resp.writeHead(200, {
		"Content-Type": "text/html"
	});
	resp.write("Funcion 2 ejecutada.");
	resp.end();
}

exports.index = index;
exports.funcion_2 = funcion_2;
