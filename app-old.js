const http = require('http'); // libreria que nos permitira generar un webserver (viene por defecto en node)

// para poder escuchar peticiones http, debemos primero crear el servidor
http.createServer((request, response) => {
        // podemos retornar un json (y hasta podemos hacerlo servicio)
        response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: "andresin",
            edad: 23,
            url: request.url
        }

        response.write(JSON.stringify(salida));

        // response.write('<h1>Hola Mundo</h1></br><h2>jolines</h2>'); // en ningun momento le dijimos que terminamos de crear la respuesta
        // es decir, al momento de poner en el navegador 'localhost:8080', este va a quedar esperando
        // esto se soluciona asi:
        response.end() // really?
    })
    // una vez creamos el servidor, tenemos que especificar el puerto al que escucharemos (un puerto libre)
    .listen(8080);

console.log("Escuchando puerto 8080");


// a fin de cuentas, todo esto es largo y engorroso
// que podemos hacer?, ps ocupar Express, el cual hace uso de la libreria http
// y nos facilita la creacion de paginas