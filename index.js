/*jshint -W117 */
var servidor = require('./servidor'); //Importamos el módulo servidor creado
var router = require('./router'); //Importamos el módulo router
var manejadores = require('./manejador'); //Importamos el módulo manejador


var manejador = {};
manejador["/"] = manejadores.index;
manejador["/index"] = manejadores.index;
manejador["/funcion_2"] = manejadores.funcion_2;
servidor.inicializar(router.route, manejador); //Llama al método inicializar del objeto servidor
