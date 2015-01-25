/*jshint -W117 */
function index(resp) {
	console.log("index ejecutada.");
	resp.writeHead(200, {
		"Content-Type": "text/html"
	});
	resp.write("Node examples.");
	resp.end();
}

function movies(resp) {
	console.log("movies ejecutada.");
	resp.writeHead(200, {
		"Content-Type": "text/html"
	});
	resp.write("movies selected.");
	resp.write("List of last seen movies");
	resp.end();
}

function series(resp) {
	console.log("seriess ejecutada.");
	resp.writeHead(200, {
		"Content-Type": "text/html"
	});
	resp.write("movies selected.");
	resp.write("List of last seen Tv series");
	resp.end();
}

exports.index = index;
exports.movies = movies;
exports.series = series;
